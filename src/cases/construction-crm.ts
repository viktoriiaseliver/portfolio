import type { OpenCase } from './types';

// Copy approved by the owner on 03.11.2026. Do not add a project duration.
export default {
  layout: 'open',
  slug: 'construction-crm',
  industry: 'Operations & government',
  kicker: 'FLAGSHIP CASE',
  cover: '/assets/work/05.jpg',
  title: { a: 'Construction ', b: 'CRM.' },
  lead: 'One system for rental, sales and delivery — 8 minutes saved on every order.',
  facts: [
    { k: 'ROLE', v: 'Lead UX/UI designer' },
    { k: 'COMPANY', v: 'Stockguard, via Develit AB' },
    { k: 'YEAR', v: '2024' },
    { k: 'PLATFORMS', v: '3 web apps + mobile' },
    { k: 'TEAM', v: 'Team of 4 designers with PM, BA, PO, engineering and QA' },
    { k: 'SCOPE', v: 'Research, UX, design system, UI' }
  ],
  chips: [
    { num: '8 min', what: 'faster per order' },
    { num: '22%', what: 'fewer navigation support tickets' },
    { num: '15%', what: 'more daily users on the client portal' }
  ],
  roles: ['Site managers', 'Procurement officers', 'Sales reps', 'Warehouse staff', 'Drivers'],
  rolesWhat: 'groups of people',
  zone: ['Research', 'UX', 'design system', 'UI'],
  workflow: { n: '4', what: 'focused products on one design system', caption: '3 WEB APPS + MOBILE' },
  result: {
    sign: '−', n: 8, unit: 'min', a: 'faster', b: 'per order',
    text: 'After launch, the average order took 8 minutes less to process. Daily users of the client portal grew 15% within 3 months of launch, and navigation support tickets fell 22%. Warehouse staff and drivers rated the new mobile app 4.2/5. Inventory tracking became 10% more accurate, and use of the AI demand-forecasting feature grew 30% after its redesign.',
    extra: [
      { n: '15%', what: 'more daily users on the client portal' },
      { n: '8 min', what: 'faster per order' },
      { n: '4.2/5', what: 'mobile app rating from warehouse staff and drivers' },
      { n: '22%', what: 'fewer navigation support tickets' },
      { n: '10%', what: 'more accurate inventory tracking' },
      { n: '30%', what: 'more use of AI demand forecasting after its redesign' }
    ],
    lesson: "Next time I'd agree on success metrics with the business before the first sketch, not after launch — and test the mobile app in the warehouse and the truck, not only in sessions."
  },
  problem: {
    a: 'Rental, sales, delivery and equipment tracking ', b: 'each lived in their own flow.',
    context: [
      'Stockguard rents power tools and sells construction materials. Five groups of people run the business: site managers and procurement officers on the client side, and sales reps, warehouse staff and drivers inside the company.',
      'The job was to connect them in one system — a client portal, a sales CRM, a back office and a mobile app — fed by telemetry from Bluetooth sensors.'
    ]
  },
  researchIntro: 'I visited sites to see how warehouse staff and drivers work, interviewed B2B clients about renting and buying, and mapped journeys for all five roles.',
  insights: [
    { n: '01', quote: 'Warehouse staff and drivers work on the move, often one-handed: one task per screen.' },
    { n: '02', quote: 'A sales rep jumps between catalogue, stock and customer to answer one call.' },
    { n: '03', quote: 'Clients want to see where their rental is without calling.' }
  ],
  decisions: [
    {
      t: 'A mobile app that changes with the role.',
      text: 'Warehouse staff and drivers see only the task in front of them, not the whole system.',
      ph: 'Mobile app, role views',
      notes: [['TRADE-OFF', 'Some people hold two roles, so I added a role switch instead of a separate login — and every new role now means designing its own view.']],
      pins: []
    },
    {
      t: 'One search for tools, materials and customers.',
      text: 'Several parameters in one field, so a sales rep finds what the client needs without switching screens.',
      ph: 'Sales CRM, search',
      notes: [['TRADE-OFF', 'A field that powerful scares new users, so it opens with suggestions and the most common filters, and it cost the team a proper search index.']],
      pins: []
    },
    {
      t: 'Notifications by priority.',
      text: 'Urgent events interrupt, the rest wait in a list — people stay informed without drowning in alerts.',
      ph: 'Notifications',
      notes: [['TRADE-OFF', 'The business had to agree on what counts as urgent, and non-urgent events are now seen later — we accepted that on purpose.']],
      pins: []
    }
  ],
  stations: [],
  screens: [
    { caption: 'One design language across web and mobile', ph: 'Web and mobile screens' },
    { caption: 'Dashboards people arrange themselves', ph: 'Custom dashboard' },
    { caption: 'Telemetry from Bluetooth sensors, shown in real time', ph: 'Equipment telemetry' },
    { caption: 'AI demand forecasting and pricing', ph: 'AI forecasting screen' }
  ],
  explored: {
    t: 'One app for everyone, with each role hidden behind permissions.',
    text: 'It looked simpler to build, but drivers need a few large actions on the move, sales reps need dense data, and clients must never see internal stock and prices. Four focused products on one design system won.'
  },
  next: { href: '/works', cat: 'OPERATIONS & GOVERNMENT', name: 'Fleet Management', num: '35%', pct: 35, what: 'faster routine tasks' }
} satisfies OpenCase;
