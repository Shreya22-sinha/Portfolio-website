export type Accent = "paper" | "clay" | "teal" | "ochre" | "sage";

export type NavLink = {
  label: string;
  href: string;
};

export type Pillar = {
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
  status: "Accepted" | "Submitted";
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
  | "integrity"
  | "arrow";

export const site = {
  name: "Shreya Sinha",
  monogram: "SS",
  title: "Shreya Sinha — Product, Payments & Applied AI",
  description:
    "Turning live UPI payments and applied AI into product decisions people can trust and use.",
  /** Replace with the production origin before launch. */
  url: "TODO",
  email: "shreyasinha22052003@gmail.com",
  /** Replace with the public LinkedIn profile URL. */
  linkedin: null as string | null,
  /** Replace with the public GitHub profile URL. */
  github: null as string | null,
  resumeHref: "/shreya-sinha-resume.pdf",
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
    { label: "Product", fill: "clay" },
    { label: "Payments", fill: "teal" },
    { label: "Applied AI", fill: "ochre" },
    { label: "Teaching", fill: "sage" },
  ] satisfies { label: string; fill: Accent }[],
  name: "Shreya Sinha",
  roleLines: [
    "Payments & applied AI",
    "Turning technical work into product decisions",
  ],
  body: "I work where technology meets the people who depend on it — on a live UPI payments platform at NPST, and on AI systems that have to earn trust before they earn adoption. The part I care about is the decision: where a fraud model should trade precision for recall, and why a traffic AI nobody can question is one nobody will use. I'm moving into product management to make those calls full-time.",
  primaryCta: { label: "See the work", href: "/#work" },
  secondaryCta: { label: "Download résumé", href: "/shreya-sinha-resume.pdf" },
};

export const pillarsHeading = "Focus areas";

export const pillars: Pillar[] = [
  {
    title: "Payments",
    body: "Working on a live UPI platform used by real merchants and consumers. Catching transaction data discrepancies before they reach users, and taking findings to Product, QA and Business in every sprint review.",
    fill: "teal",
    icon: "payments",
  },
  {
    title: "Applied AI",
    body: "Fraud detection and computer-vision systems taken past the notebook: compared, selected, documented and shipped as APIs with validation and structured logging.",
    fill: "clay",
    icon: "ml",
  },
  {
    title: "Research",
    body: "Three papers on adaptive traffic signal control — one accepted at ICIEM'26, two submitted to IEEE venues.",
    fill: "ochre",
    icon: "research",
  },
  {
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
        },
        {
          title:
            "SmartTraffic AI: A Real-Time Adaptive Traffic Signal Control System",
          authors: "S. Sinha, L. Hota, K. K. Senapati, A. Kumar",
          venue: "IEEE Transactions on Networking, 2026",
          status: "Submitted",
        },
        {
          title:
            "SmartTraffic AI for a Real-Time Adaptive Traffic Signal Control System",
          authors: "S. Sinha, L. Hota, K. K. Senapati",
          venue: "2026 IEEE Future Networks World Forum (FNWF)",
          status: "Submitted",
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
        "Communicating technical work to non-technical teams",
        "SQL & data analysis",
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
  backLabel: "← Back to work",
  backHref: "/#work",
  items: [
    {
      slug: "fraud-detection",
      title: "Detecting fraud at 2% positive class",
      fill: "clay",
      icon: "fraud",
      summary:
        "Compared Isolation Forest, One-Class SVM and autoencoders across precision, recall, F1 and AUC-ROC on ~100K transactions. The real decision wasn't best accuracy — it was where to sit on the precision/recall curve given what a false positive costs a risk team. Shipped as a documented REST API.",
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
        "A Deep Q-Network controlling three signal phases from a real-time vision pipeline cut average wait time 30% and raised throughput 25% over a fixed-timer baseline. But operators won't adopt decisions they can't interrogate, so a locally hosted LLaMA 3 layer translates every signal decision into plain language.",
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
      slug: "transaction-discrepancies",
      title: "Catching transaction discrepancies before release",
      fill: "ochre",
      icon: "integrity",
      summary:
        "On a live UPI platform, transaction data diverged across services and databases. Surfaced and resolved the discrepancies pre-release, protecting integrity for real users. Presented findings and blockers in sprint reviews with Product, QA and Business.",
      tags: ["Payments", "Data Integrity", "Cross-functional"],
      sections: [
        {
          heading: caseStudyHeadings.context,
          body: "On a live UPI platform, transaction data diverged across services and databases. Surfaced and resolved the discrepancies pre-release, protecting integrity for real users. Presented findings and blockers in sprint reviews with Product, QA and Business.",
        },
        { heading: caseStudyHeadings.decision, body: todo(caseStudyHeadings.decision) },
        { heading: caseStudyHeadings.choice, body: todo(caseStudyHeadings.choice) },
        { heading: caseStudyHeadings.cost, body: todo(caseStudyHeadings.cost) },
        { heading: caseStudyHeadings.outcome, body: todo(caseStudyHeadings.outcome) },
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
