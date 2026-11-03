// Content schema for case pages. One file per case in src/cases/; `layout` picks the page template:
// open (level A flagship), standard (B), short (C), nda, graphic.
// Text in [brackets] is a placeholder: hidden in production, marked in `npm run dev`.

type Fact = { k: string; v: string };
type Title = { a: string; b: string };
type Next = { href: string; cat: string; name: string };

export type OpenCase = {
  layout: 'open';
  slug: string;
  draft?: boolean;
  industry: string;
  kicker: string;
  cover: string;
  title: Title;
  lead: string;
  facts: Fact[];
  chips: { num: string; what: string }[];
  roles: string[];
  zone: string[];
  workflow: { n: string; what: string; caption: string };
  result: { sign: string; n: number; unit: string; a: string; b: string; howMeasured?: string; extra?: { n: string; what: string }[]; lesson?: { text: string; why: string } };
  problem: { a: string; b: string; context: string[] };
  insights: { n: string; quote: string; src: string }[];
  decisions: { t: string; ph: string; image?: string; notes: [string, string][]; pins: [number, number][]; note?: { label: string; text: string } }[];
  // Optional flagship blocks (used by OOKA, PokerMatch…): shown only when filled.
  compare?: { label: string; before: { ph: string; image?: string }; after: { ph: string; image?: string } };
  exploded?: { title: string; layers: { label: string; ph?: string; image?: string }[] };
  stations: { t: string; image?: string }[];
  explored: { alternative: string; reason: string; image?: string };
  next: Next & { num: string; pct: number; what: string };
};

export type NdaCase = {
  layout: 'nda';
  slug: string;
  draft?: boolean;
  industry: string;
  title: Title;
  lead: string;
  facts: Fact[];
  scale: { num: string; what: string; n: number; of: number }[];
  plates: string[];
  artefacts: { t: string; m: string }[];
  can: string[];
  cant: string[];
  releases: { date: string; tag: string; text: string }[];
};

export type GraphicCase = {
  layout: 'graphic';
  slug: string;
  draft?: boolean;
  kind: string;
  year: string;
  heroPh: string;
  heroImage?: string;
  title: Title;
  facts: Fact[];
  pieces: { t: string; m: string; span: number; ar: string; ph: string; image?: string }[];
  palette: { c: string; fl: number }[];
  paletteDraft?: boolean;
  typeface: string;
  formats: string[];
  steps: { t: string; ph: string; image?: string }[];
  next: Next & { img: string };
};

// Level B — standard case, 1–2 min: header → passport → task → 2–3 one-sentence decisions → result → next.
export type StandardCase = {
  layout: 'standard';
  slug: string;
  draft?: boolean;
  industry: string;
  title: Title;
  lead: string;             // the card's one-line task
  facts: Fact[];            // ROLE, COMPANY, YEAR, PLATFORMS
  cover?: string;
  result?: { n: string; what: string };   // shown only with a real number
  task: string;             // one paragraph
  decisions: { t: string; ph?: string; image?: string }[];
  numbers?: { n: string; what: string }[];
  tags: string[];
  next: Next & { num?: string; pct?: number; what?: string };
};

// Level C — short case, 20–30 s: header, passport, 2–3 sentences, 4–6 screens with captions.
export type ShortCase = {
  layout: 'short';
  slug: string;
  draft?: boolean;
  industry: string;
  title: Title;
  facts: Fact[];
  text: string[];           // 2–3 sentences
  screens: { caption: string; ph: string; image?: string }[];
  tags: string[];
  next: Next & { num?: string; pct?: number; what?: string };
};

export type Case = OpenCase | NdaCase | GraphicCase | StandardCase | ShortCase;
