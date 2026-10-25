#!/usr/bin/env bash
# Build the site and publish it to the VPS.
#
#   npm run deploy                 # site files only (the usual case)
#   npm run deploy -- --setup      # also install/refresh the server config (first time, or after
#                                  # changing anything in server/)
#
# Each deploy is uploaded to its own release folder and switched in atomically, so visitors never
# see a half-uploaded site. The last 5 releases are kept on the server for rollback.
set -euo pipefail

VPS_HOST="${VPS_HOST:-201.18.200.45}"
VPS_USER="${VPS_USER:-root}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/baelapps_vps}"
REMOTE_DIR="/srv/baelapps"
EDGE_SITE="/srv/bq/caddy/sites/baelapps.caddy"

ssh_opts=(-i "$SSH_KEY" -o StrictHostKeyChecking=accept-new)
remote() { ssh "${ssh_opts[@]}" "$VPS_USER@$VPS_HOST" "$@"; }
release="$(date +%Y%m%d-%H%M%S)"

npm run build

echo "→ Uploading release $release to $VPS_USER@$VPS_HOST"
tar -czf - -C dist . | remote "
  set -e
  mkdir -p $REMOTE_DIR/releases/$release
  tar -xzf - -C $REMOTE_DIR/releases/$release
  ln -sfn releases/$release $REMOTE_DIR/current.tmp
  mv -Tf $REMOTE_DIR/current.tmp $REMOTE_DIR/current
  cd $REMOTE_DIR/releases && ls -1t | tail -n +6 | xargs -r rm -rf
"

if [[ "${1:-}" == "--setup" ]]; then
  echo "→ Installing server config"
  tar -czf - -C server Caddyfile compose.yml edge-site.caddy | remote "
    set -e
    tar -xzf - -C $REMOTE_DIR
    cd $REMOTE_DIR && docker compose up -d --force-recreate
    # Check the shared edge proxy accepts the new site before reloading it gracefully
    cp $REMOTE_DIR/edge-site.caddy $EDGE_SITE.new
    mv $EDGE_SITE.new $EDGE_SITE
    if docker exec bq-caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null 2>&1; then
      docker exec bq-caddy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile
    else
      rm -f $EDGE_SITE
      echo 'Edge config invalid; baelapps.caddy removed, edge left unchanged' >&2
      exit 1
    fi
  "
fi

echo "✓ Live at https://www.baelapps.com (release $release)"
