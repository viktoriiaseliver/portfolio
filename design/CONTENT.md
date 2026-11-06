# Portfolio — all copy (source of truth)

Extracted from the final design files, Oct 2026. Copy is final and must be kept word for word. Text in [brackets] is a placeholder still to be filled. Strings in the "Data" blocks come from the pages' logic (lists, cards, rows).


---

## Home  (`Home.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Contact
- Senior Product Designer
- Available now · {{ location }}
- I take products from research to release, and I stay until they work in real use.
- See case studies
- Download CV
- 9
- years
- 2017
- leading since 2023
- 2026
- 4
- designers led
- 7
- industries
- Languages
- Proof,
- not adjectives.
- All 44 works →
- BEFORE
- 15 min
- AFTER
- 3 min
- To process a traffic violation
- Field app for officers →
- 4 weeks
- From concept to launch, in the middle of a lockdown
- Delivery platform · 100+ restaurants
- −40%
- less time on core tasks
- IWMS · warehouse teams →
- 87% COMPONENT REUSE ACROSS 3 MARKETS
- US · DE · AE
- 400+
- components in 1 design system across the US, Germany and the UAE
- OOKA →
- Products I designed are used at
- JW Marriott Hotels
- Metro Cash &amp; Carry
- What you can hand me
- A whole
- product area.
- 1 DESIGNER
- Last role: the only designer on an AI meeting assistant. Before that: led a team of 4 designers on enterprise and government systems for a Swedish software company.
- How I work with engineers
- My designs
- get built.
- I ship my own iOS apps with Claude Code and Cursor, so I design with the build in mind.
- Designed it.
- Built it.
- 3 IOS APPS · SWIFTUI · CLAUDE CODE · CURSOR
- IN APP STORE REVIEW
- Nine years
- on one line.
- V. N. Karazin Kharkiv National University, BA · ECV Nice, Web and Graphic Design · ESDAC Nice, Design Produit

### Data
- , menu: false, w: typeof window !== 
-  ? window.innerWidth : 1440 };
  componentDidMount() {
    this._navS = () => { const y = window.scrollY, d = y - (this._ly || 0); this._ly = y; const h = y > 240 && d > 6 ? true : (d < -6 || y < 240) ? false : !!this.state.navHidden; if (h !== !!this.state.navHidden) this.setState({ navHidden: h }); };
    window.addEventListener(
- , this._rs);
    this._io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) this.setState({ active: e.target.id }); }), { rootMargin: 
- , this._navS); this._io && this._io.disconnect(); }
  _nv() { const w = this.state.w || 1440, narrow = w < 640, m = !!this.state.menu; return { y: this.state.navHidden && !m ? 
- , toggle: () => this.setState({ menu: !m }), close: () => this.setState({ menu: false }), links: [["#work","Proof"],["Work.dc.html","All work"],["About.dc.html","About"]].map(([h, t]) => ({ href: h, label: t, bg: t === "Proof" ? 
- A — People in hard conditions
- I design software for people who 
- can’t afford to fight it.
- B — Blank page to release
- I take complex products from a blank page 
- to release.
- C — Complex to clear
- I turn complicated workflows into software 
- people pick up with little or no training.
- Remote across Europe
- Remote or hybrid on the Riviera
- Remote across Europe or hybrid on the French Riviera
- How I work
- My apps
- All work
- ]];
    const COB = 
- ;
    const EXP = [
      [2017, 2019, 
- Design studio
- UX/UI and Graphic Designer
- Techstack Ltd
- Product Designer
- OOKA Technologies
- UX/UI Design Team Lead
- Multi-asset trading platform
- Develit AB, Sweden
- Senior UX/UI Designer
- One Discovery
- Head Product Designer
- AI meeting assistant
- In gloves
- Warehouse and site teams
- On the road
- Traffic officers
- Weak internet at sea
- Ship crews
- Restaurant staff
- HR tech
- Design system
- Product UI
- Hand off to
- Review the build
- Design QA
-  }
      ],
      axis: Array.from({ length: 9 }, (_, i) => String(2017 + i)),
      exp: EXP.map(([s, e, r, c, lead]) => { const end = e === s ? s + 1 : e; return { r, c, y: e === s ? String(s) : ((end - s) < 2 ? 

---

## Work  (`Work.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Contact
- Work
- / 44
- PROJECTS SHOWN
- 25 products I designed for companies in 7 industries, 5 apps I build on my own, and the graphic work behind them.
- Industry
- Clear
- Filter
- Clear all
- VIEW
- PLATFORM
- INDUSTRY
- Show {{ fb.countLabel }}
- Nothing here yet.
- Clear filters
- {{ g.no }} / {{ g.total }}
- Show {{ g.moreN }} more
- ({{ g.count }})
- View case
- I also build my own products — from the first sketch to the App Store.
- See My products
- My
- products
- I build small, focused apps on my own: the idea, the design, the SwiftUI code with Claude Code and Cursor, and the App Store page. Every decision is mine to defend and every bug is mine to fix — that is the best product school I know.
- DECISIONS I MADE
- WHAT I DID
- Open product page
- CONCEPT
- Kvit
- Receipts, grocery prices and a food budget in one place.
- Idea
- research
- product design
- IN DAILY USE
- How I work
- with AI
- My everyday setup: a system of AI agents with rules I wrote and keep improving.
- Graphic &amp;
- illustration
- Brand systems, illustration, print and icons. 14 projects, plus product work where the visual side carried the result.
- TYPE
- Product work with a strong visual side
- All product work

### Data
- , ind: null, plat: null, gtype: null, view: null, hover: null, fx: 0, fy: 0, sel: null, w: typeof window !== 
-  ? window.innerWidth : 1440, canHover: typeof window !== 
- ).matches : true };
  barRef = React.createRef();
  componentDidMount() {
    this._navS = () => { const y = window.scrollY, d = y - (this._ly || 0); this._ly = y; const h = y > 240 && d > 6 ? true : (d < -6 || y < 240) ? false : !!this.state.navHidden; if (h !== !!this.state.navHidden) this.setState({ navHidden: h }); };
    window.addEventListener(
- , this._navS, { passive: true });
    const s = new URLSearchParams(location.search).get(
-  }); }
  _nv() { const w = this.state.w || 1440, narrow = w < 640, m = !!this.state.menu; return { y: this.state.navHidden && !m ? 
- All work
- ; if (document.body.style.overflow !== want) document.body.style.overflow = want; }
  renderVals() {
    const { section, ind, plat, gtype, hover, fx, fy, sel, w, canHover } = this.state;
    const bp = w < 640 ? 
- ;
    const pick3 = (d, t, m) => bp === 
-  ? t : d;
    const span = (d, t, m) => 
-  + pick3(d, t, m);
    const VKEY = { 
- Index with side preview
-  };
    let view = this.state.view || VKEY[this.props.defaultView] || 
- ;
    const COB = 
- ;
    const IND = [
      [
- Software for people who work in warehouses, on construction sites, at sea and on the road. Dense data, several roles on one screen, weak connection, little time for training.
- Cashier, payments, bonuses and regional launches for an online poker platform.
- Stores and checkouts, from a design system shared by 3 markets to small independent shops.
- Ordering, menus and service tools for hotels and restaurants, including a launch during lockdown.
- Tools for medical staff and patients: schedules, records and remote consultations.
- HR tech
- s admin and the candidate
- Content platforms, websites and an educational app, where reading and browsing are the product.
- Construction CRM
- Case - Construction CRM.dc.html
-  });
    const PRODUCTS = [
      P(
- 8 min faster per order
- Rental, sales, delivery and Bluetooth equipment tracking in 3 web apps and a mobile app
- Lead designer · Stockguard, via Develit AB · 2024
- Web · Mobile · AI features
- Traffic Management System
- 15 → 3 min per violation
- Mobile app for traffic officers, from vehicle check to fine payment
- Senior designer · Develit AB · 2024
- Mobile · Field use
- Warehouse inventory, orders and shipments for office and floor staff
- Lead designer · Develit AB · 2024
- Fleet Management
- Maritime fleet operations under international rules, with AI assistance
- Web · AI features · Accessibility
- Tool Metrica
- Tool tracking for construction sites, built for gloves and bright sun
- Digital Transport Management
- National transport programme: fleet lifecycle, real-time tracking and reporting
- PokerMatch Platform
- 3× faster transactions
- Platform redesign and new versions for Ukraine and Kazakhstan
- Team lead · PokerMatch · 2023
- Web · Design system · Localisation
- Deposits and withdrawals designed around trust
- Bonus System
- Activation in 2 steps instead of 5
- Bonus cards and activation on desktop and mobile
- Web · Mobile · Design system
- Game Landing Pages
- Paid-traffic landing pages for Aviator, JetX and Poker Land
- OOKA Design System
- One design system and store for a connected device in the US, Germany and the UAE
- Product designer · OOKA Technologies · 2022–2023
- Web · Design system · WCAG 2.1 AA
- Pre-order Diary
- Pre-order store for a book release, paid before print
- Traditional Products Store
- Online store for a family selling traditional products
- Sole designer · Freelance · 2021–2022
- Concept to launch in 4 weeks
- Delivery and pick-up for 100+ restaurants during lockdown
- Senior designer · Techstack · 2020
- Guest service and staff operations for hotels and restaurants; partners include JW Marriott and Metro Cash & Carry
- Senior designer · US hospitality-tech company · 2020–2021
- 5× faster menu updates
- Multilingual digital menus with a simpler admin
- Lead designer · Techstack · 2019–2023
- 2× faster access to patient data
- One place for patient data across healthcare systems
- UX/UI designer · Techstack · 2019–2023
- Healthcare Management
- Appointment booking in 3 clicks
- Desktop app for medical staff and mobile app for patients
- HR Platform
- Recruiter admin and public career portal
- UX/UI designer · Techstack · 2021–2022
- Job Board
- $2M raised after MVP launch
- Multimedia job board that matches people by lifestyle
- AnOther Media
- 3× longer reading time
- Redesign of a European tech media platform with 500 000+ monthly readers
- Product designer · Techstack · 2019–2023
- Techstack Website
- 2.5× more qualified leads
- Corporate website redesign for an IT company
- Gallery Website
- Lecture schedule and online registration for an art gallery
- Summer Camp
- Camp website redesigned to grow registrations
- Mobile guide to brutalist architecture: timeline, map and glossary
- , d: "An Instagram feed planner that starts with colour, not photos. You add future posts as coloured tiles and see how they sit next to what
- Colour before content: plan the mood of the grid before the photos exist.
- Private by design: import your profile with a screenshot. No login, no server, everything stays on the phone.
- One tap turns the whole feed, real photos included, into its colours.
- product design
- App Store page
- When did we walk, when did we feed, how did it go. 2 taps, and nobody has to ask in the evening. It started with my own dog, Stitch.
- One shared diary for the family, with invites and roles.
- "Does the dog need to go out?" answers honestly: with less than 4 days of data it says "not sure yet".
- Health tools are a mode, not a tab: they appear only when the dog is on treatment.
- family sharing
- A countdown to your next event that tells you when to walk out the door, right on the home screen.
- It counts down to leaving time, not to the event itself.
- Travel time includes parking.
- Widgets first: most of the time you never open the app.
- Brand Guidelines
- Brand system · Techstack
- Company Values Posters
- Internal brand · Techstack
- Business Cards
- Print identity
- AI Illustrations
- Generative + hand finish
- Technical Illustrations
- Product and engineering visuals
- Food Illustrations
- Editorial series
- Wild Animals
- Personal series
- Daily Sketch
- Daily practice
- New Year Posters
- Print series
- Anticafe Poster
- Event poster
- iOS Icon Set
- 282 appreciations on Behance
- Data visuals
- Animated Ads
- Motion banners
-  + i }));

    const chip = (on, extra) => ({ on, bg: on ? INK : 
- );
    const showProduct = section === 
- ;
    const showMine = (section === 
- );
    const showGraphic = (section === 
- ) && !ind && !plat;
    const prodFiltered = showProduct ? PRODUCTS.filter(p => (!ind || p.ind === ind) && (!plat || platOf(p).includes(plat))) : [];
    const raf = fn => { if (this._raf) return; this._raf = requestAnimationFrame(() => { this._raf = null; fn(); }); };
    const indLabelOf = k => ((IND.find(x => x[0] === k) || [])[1] || 
- ).toUpperCase();
    const selT = (prodFiltered.find(p => p.t === sel) || prodFiltered[0] || {}).t;
    const shortMeta = m => { const parts = m.split(
- ); return parts[0] + 
-  + parts[parts.length - 1]; };
    let no = 0, gi = 0;
    const groups = IND.map(([k, label, sub]) => {
      const items = prodFiltered.filter(p => p.ind === k).map((p, idx) => {
        no++;
        const dark = !!p.img, h = canHover && hover === p.t, on = selT === p.t;
        return { ...p, no: String(no).padStart(2, 
- ,
          enter: e => { if (!canHover) return; const r = e.currentTarget.getBoundingClientRect(); this.setState({ hover: p.t, fx: e.clientX || r.left + r.width * .6, fy: e.clientY || r.top + r.height / 2 }); },
          move: e => { const x = e.clientX, y = e.clientY; raf(() => this.setState({ fx: x, fy: y })); },
          select: () => this.setState({ sel: p.t }),
          selBg: on ? INK : 
-  };
      });
      const capped = bp === 
-  && !this.state.openG[k] && items.length > 3;
      return { label, sub, count: items.length, items: capped ? items.slice(0, 3) : items, hasMore: capped, moreN: items.length - 3, more: () => this.setState({ openG: { ...this.state.openG, [k]: true } }) };
    }).filter(g => g.items.length);
    const gTotal = String(groups.length).padStart(2, 
- ); g.total = gTotal; });
    const prev = p => p ? { ...p, img: p.img || 
-  };
    const hovered = prodFiltered.find(p => p.t === hover);
    const selected = prodFiltered.find(p => p.t === selT);
    const gFiltered = GR.filter(g => !gtype || g.type === gtype);
    const shown = prodFiltered.length + (showMine ? 5 : 0) + (showGraphic ? gFiltered.length : 0);
    const SECT = [[
- Product work
- My products
-  ? 3 : PRODUCTS.filter(p => (!ind || p.ind === ind) && platOf(p).includes(pl)).length;
    const GT = [[
- , 3]];
    const VIEWS = [[
- );
    const isRows = showProduct && view === 
- ;
    const floatOn = isRows && canHover && bp !== 
-  && !!hovered;
    const IND_L = Object.fromEntries(IND.map(x => [x[0], x[1]]));
    const fTok = [ind && { label: IND_L[ind], remove: () => this.setState({ ind: null }) }, plat && { label: plat, remove: () => this.setState({ plat: null }) }].filter(Boolean);
    const mob = bp === 
- ;
    const fbDD = !!this.state.dd, nShown = prodFiltered.length;
    const fRow = (label, n, on, pick, off) => ({ label, n, on, pick, off, bg: on ? 
- , op: off ? .4 : 1 });
    const fb = { top: this.state.navHidden ? 
- , PRODUCTS.filter(p => !plat || platOf(p).includes(plat)).length, !ind, () => this.setState({ ind: null, dd: false }), false)].concat(IND.map(([k, label]) => { const n = indCount(k); return fRow(label, n, ind === k, () => this.setState({ ind: k, dd: false, hover: null }), !n && ind !== k); })),
      plats: [{ label: 
- ].map(pl => { const n = platCount(pl); return { label: pl, on: plat === pl, off: !n && plat !== pl, pick: () => this.setState({ plat: plat === pl ? null : pl, ind: pl === 
- Viktoriia Seliverstova
- , cards: isCards, index: isIndex },
      sections: SECT.map(([k, label, n]) => { const on = section === k; return { label, n, on, pick: () => this._go(k), bg: on ? 
-  }; }),
      showProduct,
      hasFilter: !!(ind || plat),
      clear: () => this.setState({ ind: null, plat: null, gtype: null }),
      industries: IND.map(([k, label]) => { const n = indCount(k); return chip(ind === k, { label, n, op: n ? 1 : 0.4, off: !n && ind !== k, pick: () => this.setState({ ind: ind === k ? null : k, hover: null }) }); }),
      platforms: [
- ].map(pl => { const n = platCount(pl); return chip(plat === pl, { label: pl, n, op: n ? 1 : 0.4, off: !n && plat !== pl, pick: () => this.setState({ plat: plat === pl ? null : pl, ind: pl === 
-  ? null : ind, hover: null }) }); }),
      views: VIEWS.map(([k, label, cols, hh]) => { const on = view === k; return { label, cols, hh, on, pick: () => this.setState({ view: k, hover: null }), bg: on ? 
- Claude Code
- App Store Connect
- , d: "Agents check screens against Apple
- Code to Figma
- I rebuilt the design systems of all 3 apps in Figma from the live code — variables, components and screens.
- Documentation stays true
- Specs are checked against the code history.
- Marketing assets
- Banners, store screenshots and short videos.
- Looking for a designer who can do both 
- product and visual?
- Hiring for a senior 
- product role?

---

## About  (`About.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Contact
- Available for new roles
- Hi, I'm
- Viktoriia.
- I'm a senior product designer. For 9 years I've been turning complex products into clear ones — warehouse and fleet systems, payments, design systems shared across markets. I lead when the team needs it and design hands-on every day. Lately I also build my own iOS apps, with AI agents I set up myself.
- Download CV
- Let's talk
- {{ l.n }} · {{ l.lv }}
- PHOTO
- DRAWN
- What I
- do.
- 01 · FOUR STRENGTHS, ONE STAGE · PICK ONE
- TARGETS FOR GLOVES · 2 ACTIONS PER SCREEN
- ONE COMPONENT · 3 MARKETS · 2 THEMES
- SWIFTUI · CLAUDE CODE · CURSOR
- ICONS · ILLUSTRATION · MOTION
- SEE IT IN
- {{ k.t }} →
- I've led teams of up to 4 designers inside cross-functional groups of up to 17 — and I still design hands-on every day.
- ME
- DESIGNERS
- BA · ENGINEERS · QA · PO
- How I
- work.
- 02 · ONE PROJECT, START TO RELEASE · THE TOOLS RIDE ALONG
- AI does the volume.
- I own the decisions.
- AI IN THE KIT
- Nine years
- on one line.
- 03 · HOVER A BAR · THEN A MARKET
- Products I designed are used in 7 markets.
- WEST → EAST
- STUDIED
- — {{ e.d }}
- Beyond
- 04 · ONE SKETCHBOOK SPREAD

### Component props / placeholders
- placeholder: Photo portrait
- placeholder: Illustrated self-portrait, with Stitch
- label: 05 · WHAT I'M LOOKING FOR
- a: Senior product designer or product design lead roles, where design shapes the product and not only the screens. 
- b: Complex B2B, fintech, AI products and design systems are where I'm strongest.
- status: Available now
- primary-label: Email
- image-ph: Illustrated me waving, with Stitch

### Data
- , spineH: 0, w: typeof window !== 
-  ? window.innerWidth : 1440 };
  componentDidMount() {
    this._navS = () => { const y = window.scrollY, d = y - (this._ly || 0); this._ly = y; const h = y > 240 && d > 6 ? true : (d < -6 || y < 240) ? false : !!this.state.navHidden; if (h !== !!this.state.navHidden) this.setState({ navHidden: h }); };
    window.addEventListener(
- , this._onResize);
    this._onScroll = () => { const ids = [
- , toggle: () => this.setState({ menu: !m }), close: () => this.setState({ menu: false }), links: [["Home.dc.html#work","Proof"],["Work.dc.html","All work"],["About.dc.html","About"]].map(([h, t]) => ({ href: h, label: t, bg: t === "About" ? 
- ;
    const INK = 
- ;
    const role = this.props.aiRoleTitle ?? 
- ;
    const TABS = [
      { t: 
- Case - Construction CRM.dc.html
- Design systems
- 400+ documented components, variables and tokens, light and dark themes. Products for 7 markets, up to 18 breakpoints, WCAG 2.1 AA.
- I prototype in code and build my own iOS apps in SwiftUI with Claude Code and Cursor. Prompting is my strongest AI skill.
- My products
- How I work with AI
- Illustration, icons, brand systems and motion — After Effects and Spline included.
- Template - Case Graphic.dc.html
- Add to bag
-  }];
    const STAGES = [[
- I go where the work happens: field research, stakeholder workshops, user interviews.
- UX audits, information architecture, flows for every role.
- Interactive prototypes — often in code, before anything goes to developers.
- Usability tests in Maze, heatmaps and session recordings in Hotjar, A/B where traffic allows.
- Google Analytics
- High-fidelity UI on a design system, accessible from the start.
- Adobe CC
- After Effects
- I stay through development and review the build before release.
- Figma Dev Mode
- ]]];
    const MK = [[
- East Africa
- JetX & Aviator landings
- WHAT I DO
- HOW I WORK
- All work
- Product Design
- Graphic Design, professional certificate
- Web Design, professional certificate
- design courses
- V. N. Karazin Kharkiv National University
- Jury member at Orpetron Web Design Awards.
- Jury badge
- I teach UX/UI to beginners as a volunteer.
- Sketch of a lecture slide
- My free iOS icon set on Behance has 282 appreciations.
- Icons from the set
- Stitch, my schipperke, is the reason Togo exists — and its first tester.

---

## Case · Construction CRM  (`Case - Construction CRM.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Contact
- {{ c.result.sign }}{{ c.result.n }}
- {{ c.result.unit }} {{ c.result.b }}
- 1 BLOCK = 1 MINUTE
- 3 → 1
- workflow
- 3 WEB APPS + MOBILE
- roles, one order
- My zone
- Skip to result ↓
- 01 · PROBLEM
- [how they worked before]
- [what this cost the business]
- 02 · RESEARCH
- What I
- found.
- “[insight]”
- {{ decN }} · DECISIONS
- Three
- decisions.
- {{ useN }} · IN USE
- The path of
- one order.
- {{ c.result.sign }}{{ c.result.n }} {{ c.result.unit }}
- EXPLORED, NOT SHIPPED
- I also explored
- [alternative]
- . It tested worse because
- [reason]
- .
- {{ resN }} · RESULT
- how measured · [how and when]
- {{ c.result.sign }}{{ counter }}
- [number 2]
- [what it measures]
- [number 3]
- WHAT I'D DO DIFFERENTLY
- Next time I'd bring drivers into testing a week earlier:
- [why]
- NEXT CASE · {{ c.next.cat }}
- {{ c.next.what }} →

### Result figures — owner-approved, Nov 2026

Not part of the Oct 2026 extraction, and deliberately kept separate from it: the
design file above carries `[number 2]` and `[number 3]`, so only three figures
were ever drawn. These six replaced them in `src/cases/construction-crm.ts`
(PR #9, "owner-approved case text") and are listed here because the rule is to
take numbers from this file word for word — and five of the six had no entry at
all until now.

- 15% — more daily users on the client portal
- 8 min — faster per order
- 4.2/5 — mobile app rating from warehouse staff and drivers
- 22% — fewer navigation support tickets
- 10% — more accurate inventory tracking
- 30% — more use of AI demand forecasting after its redesign

Still unwritten: `howMeasured` for this case. The design has a "how measured ·
[how and when]" line, the field is optional and unset, so the page shows six
figures with no statement of how or when they were taken.

### Component props / placeholders
- placeholder: Explored alternative

### Data
- FLAGSHIP CASE
- Lead designer
- Stockguard, via Develit AB
- 3 web apps + mobile
- per order
- Warehouse workers
- design system
- One order touched 3 apps, and 
- nobody saw the whole picture.
- Stockguard rents and sells construction equipment. Office staff, drivers and warehouse workers each used
- What AI suggests, what a person decides.
- AI feature screen
- AI DOES
- CAN FAIL
- UI SHOWS
- Bluetooth equipment tracking.
- Equipment map screen
- Fleet Management
- , after: false, baTouched: false, playing: true, counted: false, w: typeof window !== 
-  ? window.innerWidth : 1440 };
  componentDidMount() {
    this._navS = () => { const y = window.scrollY, d = y - (this._ly || 0); this._ly = y; const h = y > 240 && d > 6 ? true : (d < -6 || y < 240) ? false : !!this.state.navHidden; if (h !== !!this.state.navHidden) this.setState({ navHidden: h }); };
    window.addEventListener(
- ).matches;
    if (this._reduce) this.setState({ playing: false });
    this._onScroll = () => { const d = document.documentElement; const p = Math.max(0, Math.min(100, d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight) * 100)); if (Math.abs(p - this.state.progress) > .5) this.setState({ progress: p }); };
    this._onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener(
- , this._onResize);
    this._io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const id = e.target.id; this.setState({ active: id }); if (id === 
- , toggle: () => this.setState({ menu: !m }), close: () => this.setState({ menu: false }), links: [["Home.dc.html#work","Proof"],["Work.dc.html","All work"],["About.dc.html","About"]].map(([h, t]) => ({ href: h, label: t, bg: t === "" ? 
- );
    const full = depth === 
- ;
    const ph = this.props.showPlaceholders ?? true;
    const INK = 
- ;
    const bp = w < 640 ? 
- ;
    const BEFORE = [[18, 24], [82, 24], [18, 80], [82, 80]], AFTER = [[14, 56], [38, 56], [62, 56], [86, 56]];
    const NODE = [[
- Web app 2
- Web app 3
- Mobile app
- ]];
    const pos = after ? AFTER : BEFORE;
    const CHS = [[
- In use
- );
    const AR = bp === 
- , bg: after ? COB : INK })),
      links: BEFORE.map(([x, y]) => { const dx = (x - 50) / 100, dy = (y - 52) / 100 / AR; return { len: (Math.hypot(dx, dy) * 100) + 
- Screen at the 

---

## Template · Case NDA  (`Template - Case NDA.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Book a 20-min call
- UNDER NDA
- GHOST UI · REAL STRUCTURE, NO PIXELS
- 01 · WHAT IT DID
- WHERE THE SCREENSHOT WOULD BE
- 02 · HOW, NOT WHAT
- My artefacts,
- client content removed.
- I CAN
- I CAN'T
- Want the originals? On a 20-minute call I walk through the real screens.
- 03 · WHAT SHIPPED

### Component props / placeholders
- a: The real screens, 
- b: on a call.

### Data
- iOS, Android and web. Light and dark from one token set. Live on App Store and Google Play.
- Product Designer
- Under NDA
- Research plan
- Token sheet
- User journey
- QA checklist
- Role, scope and years
- Decisions and the trade-offs behind them
- How the light and dark themes share one token set
- Platforms and where it is live
- Client and product names
- Real screens and data
- Business numbers
-  }]
  };
  state = { progress: 0, dark: true, w: typeof window !== 
-  ? window.innerWidth : 1440 };
  componentDidMount() {
    this._navS = () => { const y = window.scrollY, d = y - (this._ly || 0); this._ly = y; const h = y > 240 && d > 6 ? true : (d < -6 || y < 240) ? false : !!this.state.navHidden; if (h !== !!this.state.navHidden) this.setState({ navHidden: h }); };
    window.addEventListener(
- , this._navS, { passive: true });
    this._onScroll = () => { const d = document.documentElement; const p = Math.max(0, Math.min(100, d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight) * 100)); if (Math.abs(p - this.state.progress) > .5) this.setState({ progress: p }); };
    this._onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener(
- , this._onResize); }
  _nv() { const w = this.state.w || 1440, narrow = w < 640, m = !!this.state.menu; return { y: this.state.navHidden && !m ? 
- , toggle: () => this.setState({ menu: !m }), close: () => this.setState({ menu: false }), links: [["Home.dc.html#work","Proof"],["Work.dc.html","All work"],["About.dc.html","About"]].map(([h, t]) => ({ href: h, label: t, bg: t === "" ? 
- ;
    const INK = 
- ;
    const th = dark
      ? { bg: INK, fg: 
-  };
    const H = [40, 55, 48, 70, 62, 80, 74, 58, 66, 90, 84, 72, 60, 76, 88, 95, 70, 64, 78, 86, 92, 80, 68, 74];
    const styles = [[COB, 

---

## Template · Case Graphic  (`Template - Case Graphic.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Contact
- PALETTE
- draft · replace with the real colours
- TYPE &amp; FORMAT
- Aa
- Sketch to
- print.
- {{ stepsN }} STEPS
- NEXT · {{ c.next.cat }}

### Component props / placeholders
- a: Need a visual 
- b: identity?
- primary-label: Let's talk

### Data
- Hero shot: the piece in context (wall, hand, table)
- MY ROLE
- Pencil sketch
- Vector draft
- Colour tests
-  }
  };
  state = { progress: 0, w: typeof window !== 
-  ? window.innerWidth : 1440 };
  componentDidMount() {
    this._navS = () => { const y = window.scrollY, d = y - (this._ly || 0); this._ly = y; const h = y > 240 && d > 6 ? true : (d < -6 || y < 240) ? false : !!this.state.navHidden; if (h !== !!this.state.navHidden) this.setState({ navHidden: h }); };
    window.addEventListener(
- , this._navS, { passive: true });
    this._onScroll = () => { const d = document.documentElement; const p = Math.max(0, Math.min(100, d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight) * 100)); if (Math.abs(p - this.state.progress) > .5) this.setState({ progress: p }); };
    this._onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener(
- , this._onResize); }
  _nv() { const w = this.state.w || 1440, narrow = w < 640, m = !!this.state.menu; return { y: this.state.navHidden && !m ? 
- , toggle: () => this.setState({ menu: !m }), close: () => this.setState({ menu: false }), links: [["Home.dc.html#work","Proof"],["Work.dc.html","All work"],["About.dc.html","About"]].map(([h, t]) => ({ href: h, label: t, bg: t === "" ? 
- ;
    const ph = this.props.showPlaceholders ?? true;
    const ST = [[

---

## App · Gamut  (`Gamut.dc.html`)

### On-page text
- Viktoriia Seliverstova
- Contact
- IN APP STORE REVIEW
- BUILT BY ME · IOS
- Gamut.
- Plan your palette, not just your posts.
- WHY I MADE IT
- [your story]
- Existing planners start with photos, so you only see the grid when the content already exists.
- FOR WHOM
- For people who care how their profile looks as a whole and plan shoots around it.
- TRY IT · A MINI GAMUT
- Colour
- before content.
- Pick a colour, tap an empty tile to plan a future post, then turn the whole feed into its colours.
- 1 · PICK A COLOUR
- 2 · SEE THE FEED
- Reset
- No login. No server.
- your.profile
- {{ planned }} PLANNED · 6 PUBLISHED
- Product
- decisions
- TRADE-OFF
- [what I gave up]
- WHAT I CUT FROM V1
- [feature]
- didn't make v1: [reason]
- How I
- made it
- I OWN
- Every product and design decision
- Figma
- SwiftUI
- AGENTS DO
- Write code and check screens against HIG and accessibility
- Claude Code
- Cursor
- I design in Figma and write SwiftUI with Claude Code and Cursor. I own every product and design decision; agents write code and check screens against HIG and accessibility.
- Once an agent
- [example]
- , I
- [what I did]
- .
- Craft
- details
- NEXT
- [step 1]
- [step 2]
- NEXT PRODUCT
- Togo
- A dog diary for the whole family.
- PROCESS
- How I work
- with AI

### Component props / placeholders
- placeholder: 15–30 s screen recording from iPhone
- placeholder: Post

### Data
- All work
-  })) }; }
  renderVals() {
    const { colour, colours, future } = this.state;
    const ph = this.props.showPlaceholders ?? true;
    const INK = 
- ;
    const SW = [[
- , INK]];
    const FEED = [
- product design
- App Store page
- Show photos
- Show colours
- Colour before content
- Plan the mood of the grid before the photos exist.
- Colour tiles screen
- Private by design
- Import your profile with a screenshot. No login, no server, everything stays on the phone.
- Screenshot import screen
- One tap turns the whole feed, real photos included, into its colours.

---

## Shared · Contact  (`Contact.dc.html`)

### On-page text
- viktoriia.seliver@gmail.com
- © 2026 Viktoriia Seliverstova

### Data
- About me →
- ]);
    const long = (p.a || 
- ).length > 60;
    const hasImage = !!p.imageId;
    return {
      a: p.a ?? 

---

## Shared · Timeline  (`Timeline.dc.html`)

### On-page text
- Building now
- GAMUT · TOGO · TIMER
- IN APP STORE REVIEW
- {{ sel.r }} · {{ sel.c }}
- LEAD ROLE
- SENIOR / PRODUCT ROLE
- TO CONFIRM

### Data
- Head Product Designer
- AI meeting-assistant platform
- Design system, web app, brand and marketing site from scratch, plus the AI agent layer.
- Senior UX/UI Designer
- One Discovery
- Multi-asset trading platform
- Native iOS and Android trading app, released to the stores, and acquisition landing pages.
- UX/UI Design Team Lead
- Develit AB
- Government and enterprise systems: construction, warehouses, fleet, traffic.
- Platform redesign, payments, bonuses and launches in Ukraine and Kazakhstan.
- Product designer
- OOKA Technologies
- One design system and store for the US, Germany and the UAE.
- Stores, websites and a mobile guide for small teams.
- UX/UI and Graphic Designer
- Products in hospitality, healthcare, HR tech and media.
- UI and Graphic Designer
- Design studio
- UI for web and mobile apps, landing pages and websites; brand identities, print and marketing visuals; wireframes, prototypes and usability tests.