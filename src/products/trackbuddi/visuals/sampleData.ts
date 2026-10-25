/** Illustrative sample data for the TrackBuddi mockups (route names from the product's demo seed). */

export const route = {
  name: 'Route A',
  school: 'Springfield International School',
  stops: [
    { name: 'Versova Stop', time: '07:30', state: 'done' },
    { name: 'D.N. Nagar', time: '07:38', state: 'done' },
    { name: 'Lokhandwala', time: '07:45', state: 'next' },
    { name: 'Andheri West Station', time: '07:52', state: 'upcoming' },
    { name: 'School Gate', time: '08:00', state: 'upcoming' },
  ] as { name: string; time: string; state: 'done' | 'next' | 'upcoming' }[],
}

export type TripStatus = 'On route' | 'Scheduled' | 'Completed'

export const trips: { route: string; driver: string; bus: string; status: TripStatus; time: string }[] = [
  { route: 'Route A', driver: 'Raj Kumar', bus: 'MH 02 AB 1234', status: 'On route', time: '07:30' },
  { route: 'Route C', driver: 'Meena Shah', bus: 'MH 02 CD 5678', status: 'On route', time: '07:35' },
  { route: 'Route D', driver: 'Suresh Patel', bus: 'MH 02 EF 9012', status: 'Completed', time: '07:10' },
  { route: 'Route B', driver: 'Raj Kumar', bus: 'MH 02 AB 1234', status: 'Scheduled', time: '15:30' },
]
