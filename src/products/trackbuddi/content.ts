/**
 * TrackBuddi — product configuration and marketing copy.
 * Features listed here reflect the TrackBuddi product (school admin web app, parent app and
 * driver app). Keep claims in step with what has shipped.
 */
import {
  BellRing,
  Bus,
  CalendarCheck,
  ChartColumn,
  ClipboardCheck,
  MapPinned,
  MonitorSmartphone,
  Route,
  School,
  Smartphone,
  UserRound,
  Users,
} from 'lucide-react'
import type { Product } from '../types'
import { TrackBuddiLogo, TrackBuddiMark } from './visuals/Brand'
import { AdminConsole, TrackBuddiHeroVisual, TrackBuddiPreview, TripProgress } from './visuals/Mockups'

const contactHref = '/contact?product=trackbuddi'

export const trackbuddi: Product = {
  slug: 'trackbuddi',
  name: 'TrackBuddi',
  theme: 'trackbuddi',
  category: 'School Transport',
  tagline: 'Real-Time School Bus Tracking',
  shortDescription: 'Live school bus tracking with instant alerts for parents.',
  description:
    'Real-time school bus tracking for schools, parents and drivers: a live fleet map for the school, instant departure and arrival alerts for parents, and a driver app that turns a phone into the GPS tracker.',

  logo: TrackBuddiLogo,
  mark: TrackBuddiMark,
  preview: TrackBuddiPreview,

  seo: {
    title: 'TrackBuddi | BaelApps',
    description:
      'TrackBuddi is real-time school bus tracking from BaelApps: a live fleet map for schools, instant alerts for parents and a driver app that turns a phone into the GPS tracker.',
  },

  hero: {
    headingLead: 'Every child’s journey,',
    headingAccent: 'tracked live.',
    subheading:
      'TrackBuddi gives schools a live view of every bus, sends parents instant alerts, and turns the driver’s phone into the GPS tracker — no extra hardware required.',
    primaryCta: { label: 'Talk to Us', href: contactHref },
    secondaryCta: { label: 'See How It Works', href: '#how-it-works' },
    assurances: ['No GPS hardware needed', 'Live map for schools', 'Instant alerts for parents'],
    visual: TrackBuddiHeroVisual,
  },

  highlights: [
    { icon: MapPinned, title: 'Live Bus Tracking' },
    { icon: BellRing, title: 'Departure & Arrival Alerts' },
    { icon: Route, title: 'Routes & Stops' },
    { icon: Users, title: 'Students & Guardians' },
    { icon: Smartphone, title: 'Driver App' },
    { icon: Bus, title: 'No GPS Hardware' },
  ],

  spotlight: {
    subheading: 'Real-time school bus tracking, with instant alerts for parents.',
    visual: TrackBuddiHeroVisual,
    layout: 'split',
  },

  sections: [
    {
      kind: 'audiences',
      eyebrow: 'One platform, three apps',
      heading: 'Built Around Everyone on the School Run',
      intro: 'The school, the parent and the driver each get a view designed for what they need to do.',
      items: [
        {
          icon: MonitorSmartphone,
          audience: 'School admin',
          title: 'The school’s transport control room.',
          description:
            'A web dashboard for the transport team to run routes, buses, drivers and students — and watch every trip live.',
          points: [
            'Live fleet map',
            'Routes, buses and drivers',
            'Students, guardians and link requests',
            'Transport analytics',
          ],
        },
        {
          icon: Users,
          audience: 'Parents',
          title: 'What parents carry in their pocket.',
          description: 'A mobile app that shows where the bus is and tells parents when it leaves and when it arrives.',
          points: [
            'Live tracking for each child',
            'Departure and arrival alerts',
            'Alert history',
            'Notification preferences',
          ],
        },
        {
          icon: Smartphone,
          audience: 'Drivers',
          title: 'The phone that is the GPS tracker.',
          description: 'A simple driver app that shares the bus location during a trip, with no extra devices.',
          points: [
            'Today’s trips at a glance',
            'Start and run a live trip',
            'Mark students boarded or absent',
            'Trip summary and history',
          ],
        },
      ],
    },
    {
      kind: 'features',
      eyebrow: 'Features',
      heading: 'Everything a School Run Needs',
      intro: 'From planning routes to the moment the bus reaches the school gate.',
      items: [
        {
          icon: MapPinned,
          title: 'Live Fleet Map',
          description: 'See every bus on a live map, with each trip’s progress along its route.',
        },
        {
          icon: Bus,
          title: 'Live Tracking for Parents',
          description:
            'Parents follow their child’s bus in real time and know when it has left and when it has arrived.',
        },
        {
          icon: BellRing,
          title: 'Instant Guardian Alerts',
          description: 'Push notifications go to guardians when the bus departs and when it arrives.',
        },
        {
          icon: Route,
          title: 'Routes & Stops',
          description: 'Plan routes and place stops directly on a map.',
        },
        {
          icon: Users,
          title: 'Students & Guardians',
          description: 'Add students in bulk from Excel and link guardians to the right child and route.',
        },
        {
          icon: ClipboardCheck,
          title: 'Boarding Made Simple',
          description: 'Drivers mark each student as boarded or absent during the trip.',
        },
        {
          icon: ChartColumn,
          title: 'Trip History & Analytics',
          description: 'Review completed trips and understand how school transport is running.',
        },
        {
          icon: Smartphone,
          title: 'No Tracking Hardware',
          description: 'The driver’s phone is the GPS source, so there are no devices to buy, fit or maintain.',
        },
      ],
      spotlight: {
        index: 1,
        badge: 'Real time',
        link: { label: 'See how it works', href: '#how-it-works' },
        visual: TripProgress,
      },
      wideIndex: 7,
    },
    {
      kind: 'journey',
      eyebrow: 'A trip with TrackBuddi',
      heading: 'From First Stop to School Gate.',
      intro: 'What happens on every trip — and who knows about it.',
      phases: [
        { label: 'Before the trip', steps: 2 },
        { label: 'On the road', steps: 3 },
        { label: 'At school', steps: 2 },
      ],
      steps: [
        { title: 'Route and stops planned', icon: Route },
        { title: 'Driver starts the trip', icon: Smartphone },
        { title: 'Bus departs — parents alerted', icon: BellRing },
        { title: 'Live location shared', icon: MapPinned },
        { title: 'Boarding marked at stops', icon: ClipboardCheck },
        { title: 'Bus arrives — guardians notified', icon: School },
        { title: 'Trip summary saved', icon: CalendarCheck },
      ],
    },
    {
      kind: 'showcase',
      eyebrow: 'Product preview',
      heading: 'Every Bus, on One Screen.',
      intro: 'The live view the school’s transport team works from: buses on the map, today’s trips and their status.',
      visual: AdminConsole,
      caption: 'Illustrative preview. Sample data shown.',
      callouts: [
        { title: 'Live fleet', description: 'Every bus on the road, shown on the map as it moves.' },
        { title: 'Today’s trips', description: 'Which trips are on route, scheduled or completed.' },
        { title: 'Alerts handled', description: 'Departure and arrival alerts go to guardians automatically.' },
      ],
      inlineCta: {
        text: 'Interested in TrackBuddi for your school?',
        cta: { label: 'Talk to Us', href: contactHref },
      },
    },
    {
      kind: 'steps',
      eyebrow: 'How it works',
      heading: 'Live Tracking in Three Steps',
      steps: [
        {
          icon: School,
          title: 'Set Up Routes & Students',
          description: 'Add buses, drivers, routes and stops, then bring in students and link their guardians.',
        },
        {
          icon: UserRound,
          title: 'Drivers Start the Trip',
          description: 'The driver starts the trip in the app and their phone shares the bus location.',
        },
        {
          icon: BellRing,
          title: 'Parents Follow Along',
          description: 'Guardians see the bus live and get alerts when it departs and arrives.',
        },
      ],
    },
    {
      kind: 'values',
      eyebrow: 'Why TrackBuddi',
      heading: 'Peace of Mind on Every School Run.',
      intro:
        'TrackBuddi is built around the three people every school journey depends on — the school, the driver and the parent.',
      points: [
        'No GPS hardware to buy or install',
        'Live bus location for schools and parents',
        'Automatic departure and arrival alerts',
        'Routes and stops managed on a map',
        'Students and guardians linked to their routes',
        'Trip history for every journey',
        'Separate apps for admins, parents and drivers',
      ],
    },
  ],

  cta: {
    heading: 'Bring Live Bus Tracking to Your School.',
    subheading: 'Talk to us about setting up TrackBuddi for your school’s transport.',
    primary: { label: 'Talk to Us', href: contactHref },
    secondary: { label: 'Explore Features', href: '#features' },
  },
}
