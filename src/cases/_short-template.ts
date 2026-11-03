import type { ShortCase } from './types';

// Level C template (20–30 s). Copy, rename without the underscore, fill the [brackets], remove `draft`.
// Prefilled from the Digital Transport Management card on Works; the slug must match the card's slug.
export default {
  layout: 'short',
  slug: 'digital-transport-management',
  draft: true,
  industry: 'Operations & government',
  title: { a: 'Digital Transport ', b: 'Management.' },
  facts: [{ k: 'ROLE', v: 'Senior designer' }, { k: 'COMPANY', v: 'Develit AB' }, { k: 'YEAR', v: '2024' }, { k: 'PLATFORMS', v: 'Web · Mobile' }],
  text: [
    'National transport programme: fleet lifecycle, real-time tracking and reporting.',
    '[Sentence 2: what I did.]',
    '[Sentence 3: what changed, if known.]'
  ],
  screens: [
    { caption: '[Caption 1]', ph: 'Screen 1' },
    { caption: '[Caption 2]', ph: 'Screen 2' },
    { caption: '[Caption 3]', ph: 'Screen 3' },
    { caption: '[Caption 4]', ph: 'Screen 4' }
  ],
  tags: ['Web', 'Mobile', 'Multi-role'],
  next: { href: '/works', cat: 'OPERATIONS & GOVERNMENT', name: 'Construction CRM', num: '8 min', what: 'faster per order' }
} satisfies ShortCase;
