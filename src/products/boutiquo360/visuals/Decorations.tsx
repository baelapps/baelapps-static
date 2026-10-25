import { Mandala } from '../../../components/ui/Ornament'

/** Faint mandala drawn behind the Boutiquo360 hero dashboard. */
export function HeroMandala() {
  return (
    <Mandala className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[150%] w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 text-hl/20" />
  )
}
