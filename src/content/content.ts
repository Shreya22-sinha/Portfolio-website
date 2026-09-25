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
  venue: string;
  status: "Accepted" | "Communicated";
  note: string;
};

export type WorkLink = {
  label: string;
  url: string;
  primary?: boolean;
};

export type WorkItem = {
  slug: string;
  title: string;
  fill: Accent;
  icon: IconName;
  summary: string;
  tags: string[];
  sections: CaseStudySection[];
  links?: WorkLink[];
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type CaseStudyFigure =
  | { kind: "single"; image: CaseStudyImage }
  | {
      kind: "grid";
      images: CaseStudyImage[];
      columns: 2 | 3;
    }
  | {
      kind: "row";
      images: CaseStudyImage[];
      caption: string;
      columns?: 2 | 3;
      contain?: boolean;
    };

export type CaseStudySection = {
  heading: string;
  body: string;
  figures?: CaseStudyFigure[];
};

export const caseStudyMedia = {
  trafficLow: {
    src: "/case-studies/traffic-low.png",
    width: 822,
    height: 1418,
  },
  trafficModerate: {
    src: "/case-studies/traffic-moderate.png",
    width: 798,
    height: 1359,
  },
  trafficClear: {
    src: "/case-studies/traffic-clear.png",
    width: 799,
    height: 1308,
  },
  vibeshelfHome: {
    src: "/case-studies/vibeshelf-home.webp",
    width: 1600,
    height: 722,
  },
  vibeshelfSearch: {
    src: "/case-studies/vibeshelf-search.webp",
    width: 1600,
    height: 720,
  },
  vibeshelfTaste: {
    src: "/case-studies/vibeshelf-taste.webp",
    width: 1600,
    height: 659,
  },
} as const;

export type ContactLink = {
  label: string;
  href: string;
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
  url: "https://shreya-sinha.vercel.app",
  email: "shreyasinha22052003@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-sinha-927626225/",
  github: "https://github.com/Shreya22-sinha",
  resumeHref: "/shreya-sinha-resume-v2.pdf",
  locale: "en_IN",
  skipToContent: "Skip to content",
  portrait: {
    src: "/portrait.jpg",
    heroSrc: "/portrait-v3.png",
    heroWidth: 402,
    heroHeight: 504,
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
          venue: "ICIEM'26, BIT Noida",
          status: "Accepted",
          note: "YOLOv8 chosen after benchmarking four models at 96.1% mAP@50.",
        },
        {
          title:
            "SmartTraffic AI: A Real-Time Adaptive Traffic Signal Control System",
          venue: "IEEE Transactions on Networking, 2026",
          status: "Communicated",
          note: "Camera-only adaptive signals cut simulated wait time 38.1%.",
        },
        {
          title:
            "SmartTraffic AI for a Real-Time Adaptive Traffic Signal Control System",
          venue: "IEEE Future Networks World Forum, 2026",
          status: "Communicated",
          note: "Plain-language explanations raised operator confidence to 87%.",
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

export const work = {
  id: "work",
  heading: "Featured work",
  viewCaseStudy: "View case study →",
  viewCaseStudyShort: "Case study →",
  backLabel: "← Back to work",
  backHref: "/#work",
  linksLabel: "Links",
  linkNewTab: "opens in a new tab",
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
          body: "A fraud detection system built on a dataset of roughly 100,000 transactions, of which about 2% were fraudulent. That imbalance is the whole problem. At a 2% positive class, a model that flags nothing at all scores 98% accuracy and catches zero fraud, so the first real decision was to throw accuracy out as a metric and work out what the system was actually for.",
        },
        {
          heading: caseStudyHeadings.decision,
          body: "Accuracy was actively misleading here, so the real question was where to set the operating point. Every missed fraud is a direct loss. Every false alarm costs a risk analyst's time and can block a legitimate customer mid-transaction. I had to decide which of those two errors the business could better absorb, then pick a model that held up at that point rather than one that topped a leaderboard.",
        },
        {
          heading: caseStudyHeadings.choice,
          body: "I benchmarked Isolation Forest, One-Class SVM and an autoencoder on precision, recall, F1 and AUC-ROC — never accuracy. Then I set the operating point before picking a winner, because the threshold is the product decision and the model is just what serves it. I weighted toward recall: a missed fraud is an unrecoverable loss, while a false positive costs analyst time, which is real but bounded and reversible. The binding constraint was review capacity — there is no point catching more fraud than a risk team can actually work through — so the threshold sits where alert volume stays inside what a human queue can absorb. I shipped the result as a documented REST API with request validation and structured logging, because a risk team can only act on a model it can plug into its own systems and audit afterwards.",
        },
        {
          heading: caseStudyHeadings.cost,
          body: "Favouring recall means accepting more false positives, which pushes load onto human reviewers and adds friction for genuine customers — a legitimate transaction held for review is a bad experience even when the review clears it. The threshold is also tied to an assumption about review capacity that I estimated rather than measured against a real team's throughput. And the time spent hardening the API, validation and logging was time not spent squeezing further gains out of the model. I would make that trade again, but it is a trade.",
        },
        {
          heading: caseStudyHeadings.outcome,
          body: "A production-ready fraud-scoring API with request validation and structured logging, built on a benchmark across three anomaly-detection approaches with an operating point chosen from error costs rather than from a metric. The takeaway I carry out of it: model selection is a business decision about which error you can afford, not a leaderboard position. The headline accuracy figure — 98% — was the one number that meant nothing.",
        },
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
          body: "An adaptive traffic signal system that reads a live camera feed, counts and classifies vehicles on each approach with YOLOv8, and hands that state to a Deep Q-Network controlling the signal phases. YOLOv8 was chosen after benchmarking four detection models, at 96.1% mAP@50. Against a fixed-timer baseline the system cut average wait time 30% and raised throughput 25%, running at roughly 90% detection accuracy.",
        },
        {
          heading: caseStudyHeadings.decision,
          body: "The Deep Q-Network already beat the fixed-timer baseline, so the open question was what to do next: keep optimising the model, or address the reason it might never be used at all. Traffic operators are accountable for what happens at a junction. They will not hand phase control to a system whose decisions they cannot question — and an unexplained model that is right 90% of the time is harder to defend than a fixed timer that is predictable and wrong.",
        },
        {
          heading: caseStudyHeadings.choice,
          body: "I prioritised adoption over further performance gains. I added a locally hosted LLaMA 3 layer that turns every signal decision into a plain-language advisory — 'allow right road to clear congestion' — shown next to the raw vehicle distribution across all four approaches, so an operator can check the reasoning against what they can see out of the window. Local hosting rather than a cloud API was deliberate: signal control at a junction cannot depend on an external service being reachable, and keeping camera-derived data on-premise avoids both the latency and the privacy questions that come with sending live road imagery off-site. I also added a feedback control — operators mark each decision good or bad — so the confidence figure on screen reflects what operators actually endorsed rather than what the model believed about itself.",
          figures: [
            {
              kind: "row",
              contain: true,
              columns: 3,
              caption:
                "The same system on three junctions. Each decision appears beside the vehicle distribution it was made from, so an operator can check the call against what they can see — and the confidence figure tracks operator feedback, not the model's own certainty.",
              images: [
                {
                  ...caseStudyMedia.trafficLow,
                  alt: "Traffic system on a low-congestion junction: 18 vehicles detected, green phase, 10-second wait, advisory to allow the right road to clear.",
                },
                {
                  ...caseStudyMedia.trafficModerate,
                  alt: "Moderate congestion: 24 vehicles detected, red phase, 30-second wait, advisory to allow the left road to clear.",
                },
                {
                  ...caseStudyMedia.trafficClear,
                  alt: "Empty junction: zero vehicles detected, advisory reading 'Road is clear. No congestion.'",
                },
              ],
            },
          ],
        },
        {
          heading: caseStudyHeadings.cost,
          body: "The explanation layer adds compute and a second system to maintain on top of a vision pipeline that already has to run in real time. It also introduces a risk the model alone did not have: an explanation that reads convincingly but does not reflect the state and action values the network actually used. Keeping the advisory bound tightly to the numbers shown alongside it mitigates that, but it stays a live concern rather than a solved one. And all of it was engineering time that could have gone into tuning the DQN further — a straight trade of measurable performance for something harder to measure.",
        },
        {
          heading: caseStudyHeadings.outcome,
          body: "30% lower average wait time and 25% higher throughput than the fixed-timer baseline at roughly 90% detection accuracy, with every decision now carrying a rationale a human can read. Operator confidence reached 87% across 200 feedback rounds. The work produced three papers: one accepted at ICIEM'26 (BIT Noida), and two communicated — to IEEE Transactions on Networking and IEEE Future Networks World Forum 2026.",
        },
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
      links: [
        {
          label: "Devpost",
          url: "https://devpost.com/software/vibeshelf",
          primary: true,
        },
        {
          label: "Walkthrough",
          url: "https://www.youtube.com/watch?v=SkdTvkQf1ZI",
        },
      ],
      sections: [
        {
          heading: caseStudyHeadings.context,
          body: "Mind the Product's World Product Day hackathon, June 2026 — two people, one weekend. My teammate framed the product: every recommender makes you speak its vocabulary, genres and categories and star ratings, when what people actually say is 'something cozy but not boring'. The reframe was that the failure sits upstream in the input — a translation problem, not a ranking problem. I owned the backend that had to make that idea hold up as a working product: Express.js APIs, authentication, shelves and lists, and the scoring layer turning the model's tags into ranked results across 547 hand-curated books, films and games.",
          figures: [
            {
              kind: "grid",
              columns: 2,
              images: [
                {
                  ...caseStudyMedia.vibeshelfHome,
                  alt: "Vibeshelf landing page: 'Your next obsession is one vibe away', with Books, Movies & TV and Games entry points.",
                  caption:
                    "The entire product is one input — describe a feeling, in any words.",
                },
                {
                  ...caseStudyMedia.vibeshelfSearch,
                  alt: "Vibeshelf film search: a free-text vibe box with example prompts and a grid of genre tags, matching against 547 curated titles.",
                  caption:
                    "Plain-language vibe in, ranked matches out. The tag grid is the fallback for people who would rather not type.",
                },
              ],
            },
          ],
        },
        {
          heading: caseStudyHeadings.decision,
          body: "The engine had to learn from its users. A thumbs up or down on a result adjusts the weight of the tags attached to it, so the next search leans toward what someone liked. The open question was how hard to adjust. Weight a single rating heavily and the engine learns fast — but one thumbs-down on a horror title can strip horror out of every later search, including the ones where the user wanted it. Weight it lightly and the loop is decorative: people rate things, nothing visibly changes, and they stop rating.",
        },
        {
          heading: caseStudyHeadings.choice,
          body: "I tuned the adjustment deliberately low and made the effect cumulative rather than immediate — several consistent signals move the ranking, one outlier doesn't. The reasoning was about trust more than accuracy. A recommender that visibly overreacts to a single click feels broken in a way a slightly slow one doesn't: a user who watches a whole category disappear concludes the system is wrong, while a user who sees results drift gradually concludes it's learning. The LLM layer needed the same defensive posture — Llama 3.3-70B returned JSON that was mostly well-formed and occasionally not, so the backend parses loosely and falls back instead of failing the request.",
          figures: [
            {
              kind: "single",
              image: {
                ...caseStudyMedia.vibeshelfTaste,
                alt: "Vibeshelf taste profile: a genre affinity radar chart beside ranked affinity bars, from Sci-Fi & Futuristic at 100% down to Epic Fantasy at 12%.",
                caption:
                  "The taste profile is the re-ranker made visible. Every thumbs up or down nudges these weights — and the calibration decision is exactly why a single rating moves one bar a little instead of flattening it.",
              },
            },
          ],
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
  email: {
    address: site.email,
    href: `mailto:${site.email}?subject=Portfolio%20enquiry`,
    copyLabel: "Copy",
    copiedLabel: "Copied",
    copyAria: "Copy email address",
  },
  links: [
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
    url: site.url,
    sameAs: [site.linkedin, site.github],
  };
}
