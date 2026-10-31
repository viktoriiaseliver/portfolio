// One source for every timeline on the site (Home · Experience, About · Path). Confirmed by the owner, Oct 2026.
export type Role = { start: number; end: number; role: string; company: string; lead: boolean; toConfirm?: boolean; dates: string; line: string };

export const TIMELINE_START = 2017;

export const roles: Role[] = [
  { start: 2025, end: 2026, role: 'Head Product Designer', company: 'AI meeting-assistant platform', lead: true, dates: '2025–2026', line: 'Design system, web app, brand and marketing site from scratch, plus the AI agent layer.' },
  { start: 2023, end: 2025, role: 'Senior UX/UI Designer', company: 'One Discovery', lead: false, dates: '2023–2025', line: '' },
  { start: 2023.85, end: 2024.7, role: 'Product designer', company: 'Multi-asset trading platform', lead: false, dates: 'Nov 2023 – Sep 2024', line: 'Native iOS and Android trading app, released to the stores, and acquisition landing pages.' },
  { start: 2024, end: 2024, role: 'UX/UI Design Team Lead', company: 'Develit AB', lead: true, dates: '2024', line: 'Government and enterprise systems: construction, warehouses, fleet, traffic.' },
  { start: 2023, end: 2023, role: 'UX/UI Design Team Lead', company: 'PokerMatch', lead: true, dates: '2023', line: 'Platform redesign, payments, bonuses and launches in Ukraine and Kazakhstan.' },
  { start: 2022, end: 2023, role: 'Product designer', company: 'OOKA Technologies', lead: false, dates: '2022–2023', line: 'One design system and store for the US, Germany and the UAE.' },
  { start: 2021, end: 2022, role: 'Designer', company: 'Freelance', lead: false, dates: '2021–2022', line: 'Stores, websites and a mobile guide for small teams.' },
  { start: 2019.85, end: 2023, role: 'UX/UI and Graphic Designer', company: 'Techstack', lead: false, dates: '2019–2023', line: 'Products in hospitality, healthcare, HR tech and media.' },
  { start: 2017.42, end: 2019.85, role: 'UI and Graphic Designer', company: 'Design studio', lead: false, dates: 'Jun 2017 – Nov 2019', line: 'UI for web and mobile apps, landing pages and websites; brand identities, print and marketing visuals; wireframes, prototypes and usability tests.' }
];
