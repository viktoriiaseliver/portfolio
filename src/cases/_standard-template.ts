import type { StandardCase } from './types';

// Level B template (1–2 min read). Copy, rename without the underscore, fill the [brackets], remove `draft`.
// Prefilled from the Traffic Management System card on Works; the slug must match the card's slug.
export default {
  layout: 'standard',
  slug: 'traffic-management-system',
  draft: true,
  industry: 'Operations & government',
  title: { a: 'Traffic Management ', b: 'System.' },
  lead: 'Mobile app for traffic officers, from vehicle check to fine payment',
  facts: [{ k: 'ROLE', v: 'Senior designer' }, { k: 'COMPANY', v: 'Develit AB' }, { k: 'YEAR', v: '2024' }, { k: 'PLATFORMS', v: 'Mobile' }],
  cover: '/assets/work/19.jpg',
  result: { n: '15 → 3 min', what: 'per violation' },
  task: '[The task in one paragraph: who uses it, what was slow or broken, what it cost.]',
  decisions: [
    { t: '[Decision 1, one sentence.]', ph: 'Screen for decision 1' },
    { t: '[Decision 2, one sentence.]', ph: 'Screen for decision 2' },
    { t: '[Decision 3, one sentence.]', ph: 'Screen for decision 3' }
  ],
  numbers: [{ n: '[number]', what: '[what it measures]' }],
  tags: ['Mobile', 'Field use'],
  next: { href: '/works', cat: 'OPERATIONS & GOVERNMENT', name: 'IWMS', num: '40%', pct: 40, what: 'less time on core tasks' }
} satisfies StandardCase;
