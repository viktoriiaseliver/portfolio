import type { OpenCase } from './types';

export default {
  layout: 'open',
  slug: 'construction-crm',
  industry: 'Operations & government',
  kicker: 'FLAGSHIP CASE',
  cover: '/assets/work/05.jpg',
  title: { a: 'Construction ', b: 'CRM.' },
  lead: 'One workflow for rental, sales and delivery — 8 minutes saved on every order',
  facts: [{ k: 'ROLE', v: 'Lead designer' }, { k: 'COMPANY', v: 'Stockguard, via Develit AB' }, { k: 'YEAR', v: '2024' }, { k: 'PLATFORMS', v: '3 web apps + mobile' }],
  chips: [{ num: '−8 min', what: 'per order' }, { num: '3 → 1', what: 'apps to one workflow' }],
  roles: ['Office staff', 'Warehouse workers', 'Drivers'],
  zone: ['Research', 'UX', 'UI', 'design system'],
  workflow: { n: '3 → 1', what: 'workflow', caption: '3 WEB APPS + MOBILE' },
  result: {
    sign: '−', n: 8, unit: 'min', a: 'faster', b: 'per order',
    howMeasured: '[how and when]',
    extra: [{ n: '[number 2]', what: '[what it measures]' }, { n: '[number 3]', what: '[what it measures]' }],
    lesson: { text: "Next time I'd bring drivers into testing a week earlier:", why: '[why]' }
  },
  problem: {
    a: 'One order touched 3 apps, and ', b: 'nobody saw the whole picture.',
    // Sentence parts; the paragraph shows only when every part is written.
    context: ['Stockguard rents and sells construction equipment. Office staff, drivers and warehouse workers each used', '[how they worked before]', '[what this cost the business]']
  },
  insights: [
    { n: '01', quote: '[insight]', src: 'From [N] interviews with drivers' },
    { n: '02', quote: '[insight]', src: 'From [source]' },
    { n: '03', quote: '[insight]', src: 'From [source]' }
  ],
  decisions: [
    { t: 'One order timeline for every role.', ph: 'Order timeline screen', notes: [['WHY', '[why]'], ['TRADE-OFF', '[what I gave up]']], pins: [[18, 22], [62, 48], [84, 80]] },
    { t: 'What AI suggests, what a person decides.', ph: 'AI feature screen', notes: [['AI DOES', '[what the AI does]'], ['CAN FAIL', '[where it can be wrong]'], ['UI SHOWS', '[how the interface shows it]']], pins: [] },
    { t: 'Bluetooth equipment tracking.', ph: 'Equipment map screen', notes: [['WHY', '[why]'], ['TRADE-OFF', '[what I gave up]']], pins: [] }
  ],
  stations: [{ t: 'Office' }, { t: 'Warehouse' }, { t: 'Truck' }, { t: 'Site' }],
  explored: { alternative: '[alternative]', reason: '[reason]' },
  next: { href: '/work', cat: 'OPERATIONS & GOVERNMENT', name: 'Fleet Management', num: '35%', pct: 35, what: 'faster routine tasks' }
} satisfies OpenCase;
