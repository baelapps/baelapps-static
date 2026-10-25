/** Illustrative sample data for the Boutiquo360 product mockups. Not real customers. */
import { ClipboardList, HandCoins, Truck, Wallet } from 'lucide-react'

export type OrderStatus = 'In Tailoring' | 'Trial Scheduled' | 'Ready' | 'Delivered' | 'Alteration'

export const sample = {
  stats: [
    { label: "Today's Revenue", value: '₹24,850', delta: '+12% vs yesterday', icon: Wallet },
    { label: 'Orders', value: '18', delta: '5 new today', icon: ClipboardList },
    { label: 'Pending Deliveries', value: '7', delta: '3 due this week', icon: Truck },
    { label: 'Outstanding Payments', value: '₹32,400', delta: 'Across 9 orders', icon: HandCoins },
  ],
  orders: [
    { customer: 'Ananya Sharma', order: 'Bridal Lehenga', status: 'In Tailoring', delivery: '12 Oct' },
    { customer: 'Priya Nair', order: 'Silk Saree Blouse', status: 'Trial Scheduled', delivery: '08 Oct' },
    { customer: 'Meera Kapoor', order: 'Anarkali Suit', status: 'Ready', delivery: '06 Oct' },
    { customer: 'Kavya Reddy', order: 'Kurta Set × 2', status: 'Alteration', delivery: '09 Oct' },
    { customer: 'Ritika Bansal', order: 'Sharara Set', status: 'In Tailoring', delivery: '14 Oct' },
    { customer: 'Sneha Iyer', order: 'Designer Gown', status: 'Delivered', delivery: '04 Oct' },
  ] satisfies { customer: string; order: string; status: OrderStatus; delivery: string }[],
  /** Weekly sales in ₹ thousands, Mon → Sun */
  weeklySales: [
    { day: 'Mon', value: 14 },
    { day: 'Tue', value: 18 },
    { day: 'Wed', value: 12 },
    { day: 'Thu', value: 21 },
    { day: 'Fri', value: 19 },
    { day: 'Sat', value: 28 },
    { day: 'Sun', value: 25 },
  ],
  measurements: [
    ['Bust', '34"'],
    ['Waist', '28"'],
    ['Hip', '38"'],
    ['Shoulder', '14.5"'],
    ['Sleeve', '18"'],
    ['Length', '42"'],
  ],
  tailoringStages: [
    'Customer',
    'Measurements',
    'Order',
    'Design Reference',
    'Trial',
    'Alterations',
    'Ready',
    'Delivered',
  ],
}
