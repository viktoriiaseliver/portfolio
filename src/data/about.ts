// About page content. Copy is final (see design/CONTENT.md).
export const intro = "I'm a senior product designer. For 9 years I've been turning complex products into clear ones — warehouse and fleet systems, payments, design systems shared across markets. I lead when the team needs it and design hands-on every day. Lately I also build my own iOS apps, with AI agents I set up myself.";

export const langs = [{ hi: 'Hello', n: 'ENGLISH', lv: 'C2' }, { hi: 'Bonjour', n: 'FRENCH', lv: 'B1' }, { hi: 'Привіт', n: 'UKRAINIAN', lv: 'NATIVE' }];

// number, label, link, filled marks, total marks
export const nums: [string, string, string, number, number][] = [['9', 'years', '#path', 9, 9], ['25', 'products', '/works', 10, 10], ['7', 'industries', '/works', 7, 7], ['400+', 'components', '/works', 10, 10], ['7', 'markets', '#path', 7, 7]];

export const tabs = [
  { t: 'Complex products', text: 'Systems with many roles, dense data and real-world limits: weak connection, gloves, bright sun, little time to learn.', links: [['Construction CRM', '/work/construction-crm'], ['Fleet', '/works'], ['Traffic', '/works']] },
  { t: 'Design systems', text: '400+ documented components, variables and tokens, light and dark themes. Products for 7 markets, up to 18 breakpoints, WCAG 2.1 AA.', links: [['OOKA', '/works'], ['PokerMatch', '/works']] },
  { t: 'Code & AI', text: 'I prototype in code and build my own iOS apps in SwiftUI with Claude Code and Cursor. Prompting is my strongest AI skill.', links: [['My products', '/#apps'], ['How I work with AI', '/#how']] },
  { t: 'Brand & visual', text: 'Illustration, icons, brand systems and motion — After Effects and Spline included.', links: [['Graphic & illustration', '/works?section=graphic']] }
];

// Design-system demo: one button cycling through markets and themes.
export const dsSteps = [
  { label: 'Add to bag', caption: 'LIGHT · EN · M', dark: false, rtl: false, large: false },
  { label: 'In den Warenkorb', caption: 'DARK · DE · M', dark: true, rtl: false, large: false },
  { label: 'أضف إلى الحقيبة', caption: 'LIGHT · AR · L · RTL', dark: false, rtl: true, large: true }
];

export const stages: [string, string, string[]][] = [
  ['Discovery', 'I go where the work happens: field research, stakeholder workshops, user interviews.', ['UserTesting', 'Miro', 'Notion']],
  ['Audit & structure', 'UX audits, information architecture, flows for every role.', ['Figma', 'Miro']],
  ['Prototype', 'Interactive prototypes — often in code, before anything goes to developers.', ['Figma', 'ProtoPie', 'Axure', 'SwiftUI']],
  ['Test', 'Usability tests in Maze, heatmaps and session recordings in Hotjar, A/B where traffic allows.', ['Maze', 'Hotjar', 'Google Analytics']],
  ['Design', 'High-fidelity UI on a design system, accessible from the start.', ['Figma', 'Adobe CC', 'After Effects', 'Spline', 'Procreate']],
  ['Handoff & QA', 'I stay through development and review the build before release.', ['Figma Dev Mode', 'Storybook', 'Jira']]
];
export const aiTools = ['Claude Code', 'Cursor', 'ComfyUI', 'Flux', 'Midjourney', 'Sora'];

// market, product, x position (west → east). A product in [brackets] is still to be written and stays hidden.
export const markets: [string, string, number][] = [['US', 'OOKA', 8], ['East Africa', '[product]', 30], ['Germany', 'OOKA', 42], ['Ukraine', 'PokerMatch', 52], ['UAE', 'OOKA', 63], ['Kazakhstan', 'PokerMatch', 76], ['India', 'JetX & Aviator landings', 92]];

export const studied = [['2022–2024', 'ESDAC', 'Product Design'], ['2023–2024', 'ECV', 'Graphic Design, professional certificate'], ['2022–2023', 'ECV', 'Web Design, professional certificate'], ['2020–2022', 'Projector', 'design courses'], ['2016–2020', 'V. N. Karazin Kharkiv National University', "Bachelor's"]];

export const beyond = [
  { k: 'JURY', t: 'Jury member at Orpetron Web Design Awards.', ph: 'Jury badge', href: '', rot: '-2deg', ty: '6px' },
  { k: 'TEACHING', t: 'I teach UX/UI to beginners as a volunteer.', ph: 'Sketch of a lecture slide', href: '', rot: '1.5deg', ty: '-4px' },
  { k: 'FREE ICONS', t: 'My free iOS icon set on Behance has 282 appreciations.', ph: 'Icons from the set', href: '', rot: '-1deg', ty: '8px' },
  { k: 'STITCH', t: 'Stitch, my schipperke, is the reason Togo exists — and its first tester.', ph: 'Stitch, illustrated', href: '/#apps', rot: '2deg', ty: '-2px' }
];

export const lookingFor = {
  label: "05 · WHAT I'M LOOKING FOR",
  a: 'Senior product designer or product design lead roles, where design shapes the product and not only the screens. ',
  b: "Complex B2B, fintech, AI products and design systems are where I'm strongest.",
  terms: ['Remote', 'Full-time or contract', 'Authorised to work in the EU']
};
