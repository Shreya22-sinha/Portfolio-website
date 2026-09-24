export type Accent = "paper" | "clay" | "teal" | "ochre" | "sage";

export type NavLink = {
  label: string;
  href: string;
};

export type Pillar = {
  id: string;
  title: string;
  body: string;
  fill: Accent;
  icon: IconName;
};

export type EducationItem = {
  degree: string;
  school: string;
  years: string;
  detail: string;
};

export type ResearchItem = {
  title: string;
  authors: string;
  venue: string;
  status: "Accepted" | "Communicated";
  note: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  fill: Accent;
  icon: IconName;
  summary: string;
  tags: string[];
  sections: CaseStudySection[];
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type ContactLink = {
  label: string;
  href: string | null;
};

export type IconName =
  | "payments"
  | "ml"
  | "research"
  | "teaching"
  | "fraud"
  | "traffic"
  | "shelf"
  | "arrow";

export const site = {
  name: "Shreya Sinha",
  monogram: "SS",
  title: "Shreya Sinha — Product, Payments & Applied AI",
  description:
    "Product-minded engineer working on banking platform access control and applied AI — and the trade-offs behind both.",
  /** Replace with the production origin before launch. */
  url: "TODO",
  email: "shreyasinha22052003@gmail.com",
  /** Replace with the public LinkedIn profile URL. */
  linkedin: null as string | null,
  /** Replace with the public GitHub profile URL. */
  github: null as string | null,
  resumeHref: "/shreya-sinha-resume-v2.pdf",
  locale: "en_IN",
  skipToContent: "Skip to content",
  portrait: {
    src: "/portrait.jpg",
    alt: "Portrait of Shreya Sinha",
    fallbackLabel: "Portrait",
  },
};

export const nav = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  menuLabel: "Site",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Research", href: "/#research" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],
};

export const hero = {
  tags: [
    { label: "Product", fill: "clay", href: "/#work" },
    { label: "Payments", fill: "teal", href: "/#pillar-payments" },
    { label: "Applied AI", fill: "ochre", href: "/#pillar-ai" },
    { label: "Teaching", fill: "sage", href: "/#pillar-teaching" },
  ] satisfies { label: string; fill: Accent; href: string }[],
  name: "Shreya Sinha",
  roleLines: [
    "Payments & applied AI",
    "Turning technical work into product decisions",
  ],
  body: "I work where technology meets the people who depend on it — designing authentication and access control for a 54-feature banking platform at NPST, and building AI systems that have to earn trust before they earn adoption. The part I care about is the decision: where a fraud model should sit on the precision/recall curve, and why a traffic AI nobody can question is one nobody will use. I'm moving into product management to make those calls full-time.",
  primaryCta: { label: "See the work", href: "/#work" },
  secondaryCta: { label: "Download résumé", href: site.resumeHref },
};

export const pillarsHeading = "Focus areas";

export const pillars: Pillar[] = [
  {
    id: "pillar-payments",
    title: "Payments",
    body: "Designed authentication and role-based access control for a 54-feature banking platform — OTP and biometric login, three admin roles, maker-checker approval — working across mobile, web and backend teams. Also led problem framing for a 22-member team during a six-department rotation.",
    fill: "teal",
    icon: "payments",
  },
  {
    id: "pillar-ai",
    title: "Applied AI",
    body: "Fraud detection and computer-vision systems taken past the notebook: benchmarked, thresholded against real business cost, and shipped as documented APIs with validation and structured logging.",
    fill: "clay",
    icon: "ml",
  },
  {
    id: "pillar-research",
    title: "Research",
    body: "Three papers on adaptive traffic signal control — one accepted at ICIEM'26, two communicated to IEEE venues. A camera-only system that cut simulated intersection wait time 38.1% on low-cost hardware.",
    fill: "ochre",
    icon: "research",
  },
  {
    id: "pillar-teaching",
    title: "Teaching",
    body: "120+ students across Classes 7–11 at a government girls' school, adapting lesson plans per grade and iterating on classroom feedback. Pass rate up 10%.",
    fill: "sage",
    icon: "teaching",
  },
];

export const about = {
  id: "about",
  heading: "About Shreya",
  columns: {
    education: {
      heading: "Education",
      fill: "teal" as Accent,
      items: [
        {
          degree: "MCA",
          school: "Birla Institute of Technology Mesra",
          years: "2024–2026",
          detail: "CGPA 8.23",
        },
        {
          degree: "BCA",
          school: "Patna Women's College",
          years: "2021–2024",
          detail: "CGPA 9.01, Platinum Jubilee Scholarship all six semesters",
        },
      ] satisfies EducationItem[],
    },
    npst: {
      heading: "At NPST",
      fill: "sage" as Accent,
      items: [
        "Authentication & access control — 54-feature banking platform, OTP and biometric login, 3 admin roles, maker-checker approval",
        "Bill-splitting product — built in a 2-day assessment, automated per-member balances and clear error handling, met all 6 core requirements",
        "Cross-functional rotation — six departments; led problem framing for a 22-member team and aligned differing views into one recommendation",
      ],
    },
    research: {
      id: "research",
      heading: "Research",
      fill: "clay" as Accent,
      items: [
        {
          title:
            "A Real-Time AI-Driven Traffic Management System using Deep Vision and Context-Aware AI",
          authors: "S. Sinha, L. Hota, K. K. Senapati, P. Paul",
          venue:
            "4th International Conference on Innovation in Engineering & Management (ICIEM'26), BIT Noida, 2026",
          status: "Accepted",
          note: "Turned traffic images into congestion alerts and rerouting advice; YOLOv8 chosen after benchmarking four models at 96.1% mAP@50.",
        },
        {
          title:
            "SmartTraffic AI: A Real-Time Adaptive Traffic Signal Control System",
          authors: "S. Sinha, L. Hota, K. K. Senapati, A. Kumar",
          venue: "IEEE Transactions on Networking, 2026",
          status: "Communicated",
          note: "A camera-only adaptive signal system cut simulated intersection wait time 38.1% on low-cost hardware.",
        },
        {
          title:
            "SmartTraffic AI for a Real-Time Adaptive Traffic Signal Control System",
          authors: "S. Sinha, L. Hota, K. K. Senapati",
          venue: "2026 IEEE Future Networks World Forum (FNWF), 2026",
          status: "Communicated",
          note: "Plain-language local explanations raised operator confidence in AI signal decisions to 87% across 200 feedback rounds.",
        },
      ] satisfies ResearchItem[],
    },
    toolkit: {
      heading: "Toolkit",
      fill: "ochre" as Accent,
      items: [
        "Metric definition",
        "Trade-off analysis",
        "Success criteria",
        "Documentation",
        "Stakeholder communication",
        "SQL",
        "Python",
        "PyTorch",
      ],
    },
  },
};

const caseStudyHeadings = {
  context: "Context",
  decision: "The decision",
  choice: "What I chose and why",
  cost: "What it cost",
  outcome: "Outcome",
};

const todo = (heading: string) =>
  `TODO: write the ${heading.toLowerCase()} for this case study.`;

export const work = {
  id: "work",
  heading: "Featured work",
  viewCaseStudy: "View case study →",
  viewCaseStudyShort: "Case study →",
  backLabel: "← Back to work",
  backHref: "/#work",
  items: [
    {
      slug: "fraud-detection",
      title: "Detecting fraud at 2% positive class",
      fill: "clay",
      icon: "fraud",
      summary:
        "Fraud was 2% of ~100K transactions, so a model that flags nothing scores 98% accuracy. I benchmarked Isolation Forest, One-Class SVM and an autoencoder on precision, recall, F1 and AUC-ROC, then set the threshold by weighing what missed fraud costs against how much review load a risk team can absorb. Shipped as a documented REST API.",
      tags: ["Anomaly Detection", "FastAPI", "Trade-off Analysis"],
      sections: [
        {
          heading: caseStudyHeadings.context,
          body: "Compared Isolation Forest, One-Class SVM and autoencoders across precision, recall, F1 and AUC-ROC on ~100K transactions. The real decision wasn't best accuracy — it was where to sit on the precision/recall curve given what a false positive costs a risk team. Shipped as a documented REST API.",
        },
        { heading: caseStudyHeadings.decision, body: todo(caseStudyHeadings.decision) },
        { heading: caseStudyHeadings.choice, body: todo(caseStudyHeadings.choice) },
        { heading: caseStudyHeadings.cost, body: todo(caseStudyHeadings.cost) },
        { heading: caseStudyHeadings.outcome, body: todo(caseStudyHeadings.outcome) },
      ],
    },
    {
      slug: "traffic-signal-model",
      title: "Making a traffic model operators would actually trust",
      fill: "teal",
      icon: "traffic",
      summary:
        "A Deep Q-Network at ~90% detection accuracy cut average wait time 30% and raised throughput 25% over a fixed timer. The next move could have been more tuning. I chose operator adoption instead — a locally hosted LLaMA 3 layer that explains every signal decision in plain language. That version was accepted at ICIEM'26.",
      tags: ["Deep RL", "YOLOv8", "Explainability"],
      sections: [
        {
          heading: caseStudyHeadings.context,
          body: "A Deep Q-Network controlling three signal phases from a real-time vision pipeline cut average wait time 30% and raised throughput 25% over a fixed-timer baseline. But operators won't adopt decisions they can't interrogate, so a locally hosted LLaMA 3 layer translates every signal decision into plain language.",
        },
        { heading: caseStudyHeadings.decision, body: todo(caseStudyHeadings.decision) },
        { heading: caseStudyHeadings.choice, body: todo(caseStudyHeadings.choice) },
        { heading: caseStudyHeadings.cost, body: todo(caseStudyHeadings.cost) },
        { heading: caseStudyHeadings.outcome, body: todo(caseStudyHeadings.outcome) },
      ],
    },
    {
      slug: "vibeshelf",
      title: "Teaching a recommender to learn without overcorrecting",
      fill: "ochre",
      icon: "shelf",
      summary:
        "A two-person hackathon build: one search box that takes 'cozy adventure like a Miyazaki film' and returns ranked books, films and games. I led the backend — auth, shelf and list APIs, and the re-ranker that learns from thumbs up and down. The hard part was calibration: adjust too hard and a single rating hijacks every later search.",
      tags: ["Express.js", "LLM Integration", "Feedback Loops"],
      sections: [
        {
          heading: caseStudyHeadings.context,
          body: "Mind the Product's World Product Day hackathon, June 2026 — two people, one weekend. My teammate Chaitanya framed the product: every recommender makes you speak its vocabulary, genres and categories and star ratings, when what people actually say is 'something cozy but not boring'. His reframe was that the failure sits upstream in the input — a translation problem, not a ranking problem. I owned the backend that had to make that idea hold up as a working product: Express.js APIs, authentication, shelves and lists, and the scoring layer turning the model's tags into ranked results across 547 hand-curated books, films and games.",
        },
        {
          heading: caseStudyHeadings.decision,
          body: "The engine had to learn from its users. A thumbs up or down on a result adjusts the weight of the tags attached to it, so the next search leans toward what someone liked. The open question was how hard to adjust. Weight a single rating heavily and the engine learns fast — but one thumbs-down on a horror title can strip horror out of every later search, including the ones where the user wanted it. Weight it lightly and the loop is decorative: people rate things, nothing visibly changes, and they stop rating.",
        },
        {
          heading: caseStudyHeadings.choice,
          body: "I tuned the adjustment deliberately low and made the effect cumulative rather than immediate — several consistent signals move the ranking, one outlier doesn't. The reasoning was about trust more than accuracy. A recommender that visibly overreacts to a single click feels broken in a way a slightly slow one doesn't: a user who watches a whole category disappear concludes the system is wrong, while a user who sees results drift gradually concludes it's learning. The LLM layer needed the same defensive posture — Llama 3.3-70B returned JSON that was mostly well-formed and occasionally not, so the backend parses loosely and falls back instead of failing the request.",
        },
        {
          heading: caseStudyHeadings.cost,
          body: "Slow learning barely shows inside a single session, which is exactly the window a hackathon demo lives in — five minutes of use reveals no personalisation at all. State lived in memory, so shelves and taste profiles didn't survive a restart; that was a deliberate cut to ship in the time available and the first thing that would need a real database behind it. And we never put it in front of users. Everything was internal testing by the two of us, so 'feels broken' is my judgement, not observed behaviour.",
        },
        {
          heading: caseStudyHeadings.outcome,
          body: "A live engine that handles messy input — typos, vague moods, franchise references — matching against 547 titles and returning 192 ranked results per search, with authentication, saved shelves, named lists, a taste radar chart and a social layer, all running on free infrastructure. What I took from it: AI product work is mostly prompt structure and defensive handling rather than model intelligence. Also a more practical lesson — GitHub's secret scanning caught an exposed API key mid-build, which is a mistake you only make once.",
        },
      ],
    },
  ] satisfies WorkItem[],
};

export const contact = {
  id: "contact",
  heading: "Contact",
  body: "The fastest way to reach me is email. I read every note.",
  links: [
    {
      label: "Email",
      href: `mailto:${site.email}`,
    },
    {
      label: "LinkedIn",
      href: site.linkedin,
    },
    {
      label: "GitHub",
      href: site.github,
    },
    {
      label: "Résumé",
      href: site.resumeHref,
    },
  ] satisfies ContactLink[],
};

export const footer = {
  name: site.name,
  year: 2026,
  line: "Built for the 30-second read. Happy to go deeper on any of the work.",
};

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.items.find((item) => item.slug === slug);
}

export function personJsonLd() {
  const sameAs = [site.linkedin, site.github].filter(
    (href): href is string => href != null && href.startsWith("http"),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "NPST",
    },
    description: site.description,
    email: site.email,
    ...(site.url !== "TODO" ? { url: site.url } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
