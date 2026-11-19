export interface Dictionary {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    sessions: string;
    whatIs: string;
    manifesto: string;
    partners: string;
    faq: string;
    luma: string;
    cta: string;
    switchLang: string;
    switchLangLabel: string;
    menu: string;
    close: string;
    skip: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    guestList: string;
  };
  card: {
    place: string;
    time: string;
    date: string;
    spots: string;
    rsvp: string;
    program: string;
    tba: string;
    starts: string;
  };
  nextSession: {
    kicker: string;
    title: string;
    when: string;
    where: string;
    spots: string;
    price: string;
    free: string;
    people: string;
    program: string;
    cta: string;
    allSessions: string;
    speakerTba: string;
  };
  statement: { line1: string; line2: string };
  whatIs: {
    kicker: string;
    title: string;
    lead: string;
    cards: { title: string; body: string }[];
    manifestoLink: string;
  };
  whoFor: {
    kicker: string;
    title: string;
    hint: string;
    profiles: { name: string; body: string }[];
    outro: string;
  };
  formats: {
    kicker: string;
    title: string;
    items: { title: string; body: string }[];
    topicsKicker: string;
    topicsTitle: string;
    topics: { title: string; body: string }[];
  };
  why: {
    kicker: string;
    title: string;
    story: string[];
    rulesKicker: string;
    rules: { title: string; body: string }[];
  };
  join: {
    kicker: string;
    title: string;
    steps: { title: string; body: string }[];
    demoTitle: string;
    demoBody: string;
    cta: string;
  };
  partners: {
    kicker: string;
    title: string;
    lead: string;
    body: string;
    cta: string;
    mailSubject: string;
  };
  faq: { kicker: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; body: string; primary: string; secondary: string };
  footer: {
    tagline: string;
    nav: string;
    contact: string;
    madeIn: string;
    seeYou: string;
  };
}
