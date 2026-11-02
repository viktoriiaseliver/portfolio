// Gamut app story. Copy is final (see design/CONTENT.md); [brackets] are still to be written.
export const did = ['Idea', 'product design', 'SwiftUI', 'App Store page'];
export const story = '[your story]';
export const why = 'Existing planners start with photos, so you only see the grid when the content already exists.';
export const forWhom = 'For people who care how their profile looks as a whole and plan shoots around it.';

// Mini Gamut palette (token names) and the six "published" posts in colour mode.
export const swatches: [string, string][] = [['Cobalt', '--cobalt'], ['Peach', '--peach'], ['Amber', '--orange'], ['Mist', '--mist'], ['Periwinkle', '--focus'], ['Ink', '--ink']];
export const feed = ['--peach', '--cobalt', '--mist', '--orange', '--focus', '--peach'];

export const decisions = [
  { t: 'Colour before content', d: 'Plan the mood of the grid before the photos exist.', ph: 'Colour tiles screen', tradeoff: '[what I gave up]' },
  { t: 'Private by design', d: 'Import your profile with a screenshot. No login, no server, everything stays on the phone.', ph: 'Screenshot import screen', tradeoff: '[what I gave up]' },
  { t: 'One tap turns the whole feed, real photos included, into its colours.', d: '', ph: 'Feed in colours screen', tradeoff: '[what I gave up]' }
];
export const cut = { feature: '[feature]', reason: '[reason]' };
export const made = { text: 'I design in Figma and write SwiftUI with Claude Code and Cursor. I own every product and design decision; agents write code and check screens against HIG and accessibility.', example: '[example]', action: '[what I did]' };
export const craft = ['Empty state', 'Dark mode', 'Languages'];
export const next = ['[step 1]', '[step 2]'];
