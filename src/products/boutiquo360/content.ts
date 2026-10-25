/**
 * Boutiquo360 — product configuration and marketing copy.
 * Edit text here; layout comes from the shared components in src/components/products.
 */
import {
  CalendarX,
  ChartColumn,
  ClipboardList,
  FileSpreadsheet,
  Footprints,
  HandCoins,
  MessageCircle,
  NotebookPen,
  Package,
  Receipt,
  Rocket,
  Ruler,
  Scissors,
  Settings2,
  Shirt,
  ShoppingBag,
  Store,
  TrendingUp,
  Truck,
  UserRoundCheck,
  Users,
  Wallet,
} from 'lucide-react'
import type { Product } from '../types'
import { Boutiquo360Logo, Boutiquo360Mark } from './visuals/Brand'
import { DashboardMockup } from './visuals/DashboardMockup'
import { HeroMandala } from './visuals/Decorations'
import { HeroDashboard } from './visuals/HeroDashboard'
import { MiniOrder, OrderCard } from './visuals/OrderCard'
import { Boutiquo360Preview } from './visuals/Preview'

const contactHref = '/contact?product=boutiquo360'

export const boutiquo360: Product = {
  slug: 'boutiquo360',
  name: 'Boutiquo360',
  theme: 'boutiquo360',
  category: 'Boutique Management',
  tagline: 'Boutique Management Platform',
  shortDescription: 'Customers, tailoring orders, inventory and billing for boutiques — in one place.',
  description:
    'An all-in-one platform for boutiques and tailoring businesses to manage customers, orders, measurements, inventory, billing and daily operations.',

  logo: Boutiquo360Logo,
  mark: Boutiquo360Mark,
  preview: Boutiquo360Preview,

  seo: {
    title: 'Boutiquo360 | Boutique Management Software | BaelApps',
    description:
      'Boutiquo360 is an all-in-one boutique management platform for customers, tailoring orders, inventory, billing, payments and online sales.',
  },

  hero: {
    headingLead: 'Run Your Boutique.',
    headingAccent: 'All in One Place.',
    subheading:
      'Boutiquo360 brings customers, tailoring orders, inventory, billing, payments and boutique operations together in one simple platform.',
    primaryCta: { label: 'Get Started', href: contactHref },
    secondaryCta: { label: 'Explore Features', href: '#features' },
    assurances: ['Built for boutiques & tailoring', 'Cloud-based, works anywhere', 'Simple to learn'],
    visual: HeroDashboard,
    decoration: HeroMandala,
  },

  highlights: [
    { icon: Users, title: 'Customer Management' },
    { icon: Scissors, title: 'Tailoring Orders' },
    { icon: Ruler, title: 'Measurements' },
    { icon: Package, title: 'Products & Inventory' },
    { icon: Receipt, title: 'Billing & Payments' },
    { icon: Store, title: 'Online Store' },
  ],

  spotlight: {
    subheading: 'Everything your boutique needs, in one place.',
    visual: DashboardMockup,
    layout: 'wide',
  },

  sections: [
    {
      kind: 'trust',
      heading: 'Everything Your Boutique Needs. In One Place.',
      items: [
        { icon: Users, title: 'Customer Management' },
        { icon: Scissors, title: 'Tailoring' },
        { icon: Package, title: 'Inventory' },
        { icon: Receipt, title: 'Billing' },
        { icon: Wallet, title: 'Payments' },
        { icon: ChartColumn, title: 'Reports' },
      ],
    },
    {
      kind: 'problem',
      eyebrow: 'The everyday reality',
      heading: 'Your Boutique Deserves Better Than Spreadsheets.',
      intro:
        'Running a boutique means juggling customers, measurements, fittings and payments — usually across notebooks, phone galleries and chat threads. It works, until the day it doesn’t.',
      points: [
        {
          icon: NotebookPen,
          title: 'Scattered customer details',
          description: 'Names, measurements and preferences spread across notebooks and WhatsApp chats.',
        },
        {
          icon: Scissors,
          title: 'Tailoring orders hard to track',
          description: 'Which order is at the tailor, which needs a trial, which is ready — all from memory.',
        },
        {
          icon: HandCoins,
          title: 'Advances & dues slip through',
          description: 'Advances, part-payments and pending amounts are difficult to follow up on.',
        },
        {
          icon: CalendarX,
          title: 'Delivery dates get missed',
          description: 'Without reminders, trial and delivery dates are easy to overlook in a busy week.',
        },
        {
          icon: Package,
          title: 'Inventory guesswork',
          description: 'Products, variants and stock levels are hard to keep accurate by hand.',
        },
        {
          icon: FileSpreadsheet,
          title: 'Manual billing & reports',
          description: 'Handwritten bills and end-of-month spreadsheets eat into time with customers.',
        },
      ],
      resolution: 'Boutiquo360 brings everything together.',
    },
    {
      kind: 'features',
      eyebrow: 'Features',
      heading: 'Everything You Need to Run Your Boutique',
      intro:
        'One connected platform for the front desk, the workroom and the books — designed around how boutiques actually work.',
      items: [
        {
          icon: Users,
          title: 'Customer Management',
          description: 'Store customer profiles, measurements, photos and complete order history in one place.',
        },
        {
          icon: Scissors,
          title: 'Tailoring & Order Management',
          description: 'Manage tailoring orders, trial dates, delivery dates, measurements and design references.',
        },
        {
          icon: Package,
          title: 'Product & Inventory',
          description: 'Manage products, categories, variants, pricing and stock levels with ease.',
        },
        {
          icon: Receipt,
          title: 'Billing & Invoicing',
          description: 'Create professional invoices and track advances, payments and outstanding amounts.',
        },
        {
          icon: MessageCircle,
          title: 'WhatsApp & SMS Updates',
          description: 'Keep customers informed about order status, trials, payments and delivery.',
        },
        {
          icon: TrendingUp,
          title: 'Reports & Insights',
          description: 'Understand sales, orders, revenue and how your boutique is performing.',
        },
        {
          icon: Store,
          title: 'Online Store',
          description: 'Showcase your collection online and let customers browse your latest pieces.',
        },
        {
          icon: Settings2,
          title: 'Custom Boutique Workflows',
          description: 'Shape the system around your process instead of forcing it into generic retail software.',
        },
      ],
      spotlight: {
        index: 1,
        badge: 'Built for tailoring',
        link: { label: 'See the tailoring workflow', href: '#tailoring' },
        visual: MiniOrder,
      },
      wideIndex: 7,
    },
    {
      kind: 'stages',
      id: 'tailoring',
      eyebrow: 'Tailoring, done right',
      heading: 'From Measurement to Delivery.',
      intro:
        'Tailoring is the heart of most boutiques — and the hardest part to keep organised. Boutiquo360 follows every garment through each stage, so your team always knows what comes next.',
      highlight: 'Never lose track of a tailoring order again.',
      stepsLabel: 'Every order, every stage',
      steps: [
        { title: 'Customer', description: 'Profile & history' },
        { title: 'Measurements', description: 'Saved for every visit' },
        { title: 'Order', description: 'Garment, fabric, price' },
        { title: 'Design Reference', description: 'Photos & sketches' },
        { title: 'Trial', description: 'Scheduled & reminded' },
        { title: 'Alterations', description: 'Notes from the fitting' },
        { title: 'Ready', description: 'Customer notified' },
        { title: 'Delivered', description: 'Balance settled' },
      ],
      benefits: [
        'Measurements saved per customer, reusable across orders',
        'Trial and delivery dates with reminders',
        'Design photos attached to each order',
        'Clear stage for every garment in the workroom',
      ],
      panel: OrderCard,
    },
    {
      kind: 'journey',
      eyebrow: 'The complete journey',
      heading: 'One Customer Journey. One Connected System.',
      intro: 'From the moment a customer walks in to the day they collect their outfit — every step is captured.',
      phases: [
        { label: 'At the counter', steps: 5 },
        { label: 'In the workroom', steps: 2 },
        { label: 'At handover', steps: 3 },
      ],
      steps: [
        { title: 'Customer walks in', icon: Footprints },
        { title: 'Selects product or tailoring service', icon: ShoppingBag },
        { title: 'Measurements captured', icon: Ruler },
        { title: 'Order created', icon: ClipboardList },
        { title: 'Advance collected', icon: HandCoins },
        { title: 'Production & tailoring', icon: Scissors },
        { title: 'Trial', icon: Shirt },
        { title: 'Final billing', icon: Receipt },
        { title: 'Delivery', icon: Truck },
        { title: 'Customer history updated', icon: UserRoundCheck },
      ],
    },
    {
      kind: 'showcase',
      eyebrow: 'Product preview',
      heading: 'See Your Boutique at a Glance.',
      intro: 'Revenue, orders, deliveries and dues — the numbers that matter every morning, on one calm screen.',
      visual: DashboardMockup,
      caption: 'Illustrative preview. Sample data shown.',
      callouts: [
        {
          title: 'Every order, live',
          description: 'Status and delivery date for each order, without asking the workroom.',
        },
        { title: 'Dues at a glance', description: 'Advances received and balances pending, always up to date.' },
        { title: 'Today, planned', description: 'Trials, measurements and pickups lined up for the day.' },
      ],
      inlineCta: {
        text: 'See how Boutiquo360 would work for your boutique.',
        cta: { label: 'Get Started', href: contactHref },
      },
    },
    {
      kind: 'values',
      eyebrow: 'Why Boutiquo360',
      heading: 'Built for Boutiques. Not Adapted for Them.',
      intro:
        'General retail software treats a bridal lehenga like a box of biscuits. Boutiquo360 is designed from the ground up for made-to-measure work, repeat clients and personal service.',
      points: [
        'Designed specifically for boutique businesses',
        'Tailoring-friendly workflows',
        'Customer measurements & history',
        'Product & inventory management',
        'Billing & payment tracking',
        'Online store capabilities',
        'Modern cloud-based platform',
        'Easy to use for the whole team',
        'Designed to scale with your business',
      ],
    },
    {
      kind: 'steps',
      eyebrow: 'How it works',
      heading: 'Up and Running in Three Simple Steps',
      steps: [
        {
          icon: Store,
          title: 'Set Up Your Boutique',
          description: 'Add your products, services, customers and business information.',
        },
        {
          icon: Scissors,
          title: 'Run Your Daily Operations',
          description: 'Manage orders, tailoring, inventory, billing and payments from one place.',
        },
        {
          icon: Rocket,
          title: 'Grow Your Business',
          description: 'Understand your business through reports and give customers a better experience.',
        },
      ],
    },
  ],

  cta: {
    heading: 'Ready to Bring Your Boutique Into One Place?',
    subheading: 'Manage your customers, orders, inventory and billing with Boutiquo360.',
    primary: { label: 'Get Started', href: contactHref },
    secondary: { label: 'Explore Features', href: '#features' },
  },
}
