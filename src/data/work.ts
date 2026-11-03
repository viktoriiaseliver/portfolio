// Work page content. Copy is final (see design/CONTENT.md).

export type Industry = { key: string; label: string; sub: string };
export const industries: Industry[] = [
  { key: 'ops', label: 'Operations & government', sub: 'Software for people who work in warehouses, on construction sites, at sea and on the road. Dense data, several roles on one screen, weak connection, little time for training.' },
  { key: 'pay', label: 'Payments & iGaming', sub: 'Cashier, payments, bonuses and regional launches for an online poker platform.' },
  { key: 'ecom', label: 'E-commerce', sub: 'Stores and checkouts, from a design system shared by 3 markets to small independent shops.' },
  { key: 'hosp', label: 'Hospitality', sub: 'Ordering, menus and service tools for hotels and restaurants, including a launch during lockdown.' },
  { key: 'health', label: 'Healthcare', sub: 'Tools for medical staff and patients: schedules, records and remote consultations.' },
  { key: 'hr', label: 'HR tech', sub: "Hiring from both sides: the recruiter's admin and the candidate's experience." },
  { key: 'media', label: 'Media & web', sub: 'Content platforms, websites and an educational app, where reading and browsing are the product.' }
];

export type Product = { ind: string; t: string; r: string; d: string; m: string; tags: string[]; img: string; slug: string };

// Old portfolio (Readymag) case URLs, used until a new case page exists. Key = product slug.
// Example: 'iwms': 'https://readymag.website/viktoriia.seliverstova/iwms/'
export const OLD_CASES: Record<string, string> = {};

// Case pages that exist: every non-draft file in src/cases/ (in dev, drafts too). The case slug must match the card's slug.
import type { Case } from '../cases/types';
export const LIVE_CASES: string[] = Object.entries(import.meta.glob<{ default: Case }>('../cases/*.ts', { eager: true }))
  .filter(([p]) => !p.endsWith('/types.ts'))
  .map(([, m]) => m.default)
  .filter((c) => !c.draft || import.meta.env.DEV)
  .map((c) => c.slug);

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const P = (ind: string, t: string, r: string, d: string, m: string, tags: string, img = ''): Product =>
  ({ ind, t, r, d, m, tags: tags.split(' · '), img, slug: slugify(t) });

export const products: Product[] = [
  P('ops', 'Construction CRM', '8 min faster per order', 'Rental, sales, delivery and Bluetooth equipment tracking in 3 web apps and a mobile app', 'Lead designer · Stockguard, via Develit AB · 2024', 'Web · Mobile · AI features', '/assets/work/05.jpg'),
  P('ops', 'Traffic Management System', '15 → 3 min per violation', 'Mobile app for traffic officers, from vehicle check to fine payment', 'Senior designer · Develit AB · 2024', 'Mobile · Field use', '/assets/work/19.jpg'),
  P('ops', 'IWMS', '40% less time on core tasks', 'Warehouse inventory, orders and shipments for office and floor staff', 'Lead designer · Develit AB · 2024', 'Web · Mobile · WCAG 2.1 AA', '/assets/work/01.jpg'),
  P('ops', 'Fleet Management', '35% faster routine tasks', 'Maritime fleet operations under international rules, with AI assistance', 'Lead designer · Develit AB · 2024', 'Web · AI features · Accessibility'),
  P('ops', 'Tool Metrica', '28% fewer lost tools', 'Tool tracking for construction sites, built for gloves and bright sun', 'Senior designer · Develit AB · 2024', 'Mobile · Field use'),
  P('ops', 'Digital Transport Management', '', 'National transport programme: fleet lifecycle, real-time tracking and reporting', 'Senior designer · Develit AB · 2024', 'Web · Mobile · Multi-role'),
  P('pay', 'PokerMatch Platform', '3× faster transactions', 'Platform redesign and new versions for Ukraine and Kazakhstan', 'Team lead · PokerMatch · 2023', 'Web · Design system · Localisation'),
  P('pay', 'P2P Payments', '', 'Deposits and withdrawals designed around trust', 'Team lead · PokerMatch · 2023', 'Web · Payments'),
  P('pay', 'Bonus System', 'Activation in 2 steps instead of 5', 'Bonus cards and activation on desktop and mobile', 'Team lead · PokerMatch · 2023', 'Web · Mobile · Design system'),
  P('pay', 'Game Landing Pages', '2 markets, 18 breakpoints', 'Paid-traffic landing pages for Aviator, JetX and Poker Land', 'Team lead · PokerMatch · 2023', 'Web · Landing · Localisation'),
  P('ecom', 'OOKA Design System', '87% component reuse across 3 markets', 'One design system and store for a connected device in the US, Germany and the UAE', 'Senior UX/UI Designer · OOKA Technologies · 2022–2023', 'Web · Design system · WCAG 2.1 AA', '/assets/work/17.jpg'),
  P('ecom', 'Pre-order Diary', '', 'Pre-order store for a book release, paid before print', 'Designer · Freelance · 2021–2022', 'Web · Checkout'),
  P('ecom', 'Traditional Products Store', '', 'Online store for a family selling traditional products', 'Sole designer · Freelance · 2021–2022', 'Web · Checkout'),
  P('hosp', 'SwiftServe', 'Concept to launch in 4 weeks', 'Delivery and pick-up for 100+ restaurants during lockdown', 'Senior designer · Techstack · 2020', 'Web · MVP · Checkout'),
  P('hosp', 'HospitalityHub', '40% higher customer satisfaction', 'Guest service and staff operations for hotels and restaurants; partners include JW Marriott and Metro Cash & Carry', 'Senior designer · US hospitality-tech company · 2020–2021', 'Web · Mobile · Multi-role'),
  P('hosp', 'DineDigital', '5× faster menu updates', 'Multilingual digital menus with a simpler admin', 'Lead designer · Techstack · 2019–2023', 'Web · Localisation'),
  P('health', 'HealthConnect', '2× faster access to patient data', 'One place for patient data across healthcare systems', 'UX/UI designer · Techstack · 2019–2023', 'Web · Data'),
  P('health', 'Healthcare Management', 'Appointment booking in 3 clicks', 'Desktop app for medical staff and mobile app for patients', 'UX/UI designer · Techstack · 2019–2023', 'Web · Mobile · Multi-role'),
  P('hr', 'HR Platform', '40% faster applications', 'Recruiter admin and public career portal', 'UX/UI designer · Techstack · 2021–2022', 'Web · Research · Multi-role'),
  P('hr', 'Job Board', '$2M raised after MVP launch', 'Multimedia job board that matches people by lifestyle', 'Lead designer · Techstack · 2019–2023', 'Web · MVP'),
  P('media', 'AnOther Media', '3× longer reading time', 'Redesign of a European tech media platform with 500 000+ monthly readers', 'Product designer · Techstack · 2019–2023', 'Web · Research · Redesign'),
  P('media', 'Techstack Website', '2.5× more qualified leads', 'Corporate website redesign for an IT company', 'UX/UI designer · Techstack · 2019–2023', 'Web · Redesign'),
  P('media', 'Gallery Website', '25% higher lecture attendance', 'Lecture schedule and online registration for an art gallery', 'UX/UI designer · Techstack · 2019–2023', 'Web'),
  P('media', 'Summer Camp', '', 'Camp website redesigned to grow registrations', 'Designer · Freelance · 2021–2022', 'Web · Redesign'),
  P('media', 'Brutalism', '', 'Mobile guide to brutalist architecture: timeline, map and glossary', 'Designer · Freelance · 2021–2022', 'Mobile · 0 → 1')
];

export const apps = [
  { name: 'Gamut', slogan: 'Plan your palette, not just your posts.', slot: 'app-gamut', ph: 'Gamut screen', page: '/products/gamut', d: "An Instagram feed planner that starts with colour, not photos. You add future posts as coloured tiles and see how they sit next to what's already published — so you know what to shoot next.", dec: ['Colour before content: plan the mood of the grid before the photos exist.', 'Private by design: import your profile with a screenshot. No login, no server, everything stays on the phone.', 'One tap turns the whole feed, real photos included, into its colours.'], did: ['Idea', 'product design', 'SwiftUI', 'App Store page'] },
  { name: 'Togo', slogan: 'A dog diary for the whole family.', slot: 'app-togo', ph: 'Togo screen', page: '', d: 'When did we walk, when did we feed, how did it go. 2 taps, and nobody has to ask in the evening. It started with my own dog, Stitch.', dec: ['One shared diary for the family, with invites and roles.', '“Does the dog need to go out?” answers honestly: with less than 4 days of data it says “not sure yet”.', 'Health tools are a mode, not a tab: they appear only when the dog is on treatment.'], did: ['Idea', 'product design', 'SwiftUI', 'widgets', 'family sharing'] },
  { name: 'Timer', slogan: 'Know when to leave, not just when it starts.', slot: 'app-timer', ph: 'Timer screen', page: '', d: 'A countdown to your next event that tells you when to walk out the door, right on the home screen.', dec: ['It counts down to leaving time, not to the event itself.', 'Travel time includes parking.', 'Widgets first: most of the time you never open the app.'], did: ['Idea', 'product design', 'SwiftUI', 'widgets'] }
];

export const stack = ['Figma', 'SwiftUI', 'Claude Code', 'Cursor', 'App Store Connect', '4 languages'];

export const ai = [
  { t: 'Design QA before release', d: "Agents check screens against Apple's Human Interface Guidelines and accessibility rules." },
  { t: 'Code to Figma', d: 'I rebuilt the design systems of all 3 apps in Figma from the live code — variables, components and screens.' },
  { t: 'Documentation stays true', d: 'Specs are checked against the code history.' },
  { t: 'Marketing assets', d: 'Banners, store screenshots and short videos.' }
];

export const graphicTypes: [string, number][] = [['Brand', 3], ['Illustration', 5], ['Print', 3], ['Icons & motion', 3]];
export const graphics = [
  ['Brand', 'Brand Guidelines', 'Brand system · Techstack'], ['Brand', 'Company Values Posters', 'Internal brand · Techstack'], ['Brand', 'Business Cards', 'Print identity'],
  ['Illustration', 'AI Illustrations', 'Generative + hand finish'], ['Illustration', 'Technical Illustrations', 'Product and engineering visuals'], ['Illustration', 'Food Illustrations', 'Editorial series'], ['Illustration', 'Wild Animals', 'Personal series'], ['Illustration', 'Daily Sketch', 'Daily practice'],
  ['Print', 'Calendar', 'Print'], ['Print', 'New Year Posters', 'Print series'], ['Print', 'Anticafe Poster', 'Event poster'],
  ['Icons & motion', 'iOS Icon Set', '282 appreciations on Behance'], ['Icons & motion', 'Infographics', 'Data visuals'], ['Icons & motion', 'Animated Ads', 'Motion banners']
].map((g, i) => ({ type: g[0], t: g[1], l: g[2], slot: 'gfx-' + i }));

export const visualProducts = ['Game Landing Pages', 'Techstack Website', 'Gallery Website', 'Summer Camp', 'Brutalism'];

export const sections: [string, string, number][] = [['all', 'All', 44], ['product', 'Product work', 25], ['mine', 'My products', 5], ['graphic', 'Graphic & illustration', 14]];
