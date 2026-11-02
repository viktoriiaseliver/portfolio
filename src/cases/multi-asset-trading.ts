import type { NdaCase } from './types';

export default {
  layout: 'nda',
  slug: 'multi-asset-trading',
  industry: 'Fintech',
  title: { a: 'Multi-asset ', b: 'trading.' },
  lead: 'iOS, Android and web. Light and dark from one token set. Live on App Store and Google Play.',
  facts: [{ k: 'ROLE', v: 'Product Designer' }, { k: 'COMPANY', v: 'Under NDA' }, { k: 'YEARS', v: '2023–2024' }, { k: 'PLATFORMS', v: 'iOS · Android · web' }],
  scale: [{ num: '3', what: 'platforms', n: 3, of: 3 }, { num: '2', what: 'themes, 1 token set', n: 2, of: 2 }, { num: '[N]', what: 'screens designed', n: 0, of: 12 }, { num: '[N]', what: 'releases shipped', n: 0, of: 8 }],
  plates: ['[What the main screen did for the user, in one sentence.]', '[What the second key flow did, in one sentence.]'],
  artefacts: [{ t: 'Research plan', m: '[N] INTERVIEWS · [WEEKS]' }, { t: 'Token sheet', m: 'LIGHT + DARK · 1 SOURCE' }, { t: 'User journey', m: '[N] STEPS · [N] ROLES' }, { t: 'QA checklist', m: '[N] ITEMS · 3 PLATFORMS' }],
  can: ['Role, scope and years', 'Decisions and the trade-offs behind them', 'How the light and dark themes share one token set', 'Platforms and where it is live'],
  cant: ['Client and product names', 'Real screens and data', 'Business numbers'],
  releases: [{ date: '[MM.YYYY]', tag: 'iOS', text: '[what shipped]' }, { date: '[MM.YYYY]', tag: 'Android', text: '[what shipped]' }, { date: '[MM.YYYY]', tag: 'Web', text: '[what shipped]' }, { date: '[MM.YYYY]', tag: 'Tokens', text: '[what shipped]' }]
} satisfies NdaCase;
