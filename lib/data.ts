export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#casestudy" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_BADGES = ["ACMA", "Business Analyst", "Quasar Technologies", "SaaS Founder"];

export const COLOR_CYCLE = ["gold", "emerald", "rust"] as const;

export const CONVERGENCE_NODES = [
  { label: "Business", top: "4%", left: "50%" },
  { label: "Finance", top: "30%", left: "92%" },
  { label: "Technology", top: "68%", left: "92%" },
  { label: "Data", top: "92%", left: "50%" },
  { label: "Product", top: "58%", left: "8%" },
];

export const EXECUTIVE_CARDS = [
  { mark: "ACMA", title: "Chartered Management Accountant", desc: "ICMAP-qualified. Understands what numbers mean, why they move, and what decisions they should drive." },
  { mark: "BA", title: "Business Analyst", desc: "BRD / FRD / SRS / PRD authoring, stakeholder workshops, and requirements as engineering source of truth." },
  { mark: "PM", title: "Product Manager", desc: "Designed the Business Health Score and MAX data architecture end-to-end, requirements to production." },
  { mark: "TS", title: "Technology & Accounting Specialist", desc: "Bridges accounting logic and software architecture across QuickBooks, Xero, Zoho, Shopify, and more." },
  { mark: "CEO", title: "CEO & Director, Quasar Technologies", desc: "Co-founded a studio spanning business software and games. Leads and builds the business suite — BrandFox and Ledgerly — end-to-end." },
];

export const STATS = [
  { number: 40, suffix: "+", label: "Satisfied Businesses", sub: "Virtual CFO & Chief Accountant" },
  { number: 10, prefix: "$", suffix: "M+", label: "Transactions Processed", sub: "Transaction Volume" },
  { number: 8, suffix: "+", label: "Software Integrated", sub: "QBO, Shopify & Zoho" },
  { number: 75, suffix: "%", label: "Faster Reporting", sub: "BI Automation Impact" },
];

export const EXPERIENCE = [
  {
    title: "Manager, External Execution",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "September 2025 – Present",
    bullets: [
      "Designed the BI infrastructure powering a platform with $4.2B in global transactions across 190+ countries.",
      "Reduced financial reporting cycle time by 75% through full automation of reporting workflows.",
      "Defined the core metrics framework across sales, finance, operations, supply chain, and e-commerce for 100+ international clients.",
      "Serves as Virtual CFO for 16 UAE businesses; supporting CFO for 28 more.",
    ],
  },
  {
    title: "Business Analyst / Product Manager",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "August 2024 – September 2025",
    bullets: [
      "Designed the Business Health Score, a composite KPI engine aggregating six platforms into a single interpretable score.",
      "Authored BRDs, FRDs, SRS, and PRDs as the engineering source of truth across all delivery cycles.",
      "Designed the data architecture for MAX, Metric's AI financial co-pilot.",
    ],
  },
  {
    title: "Accounts Analyst",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "July 2022 – August 2024",
    bullets: [
      "Analyzed financial data for 45+ businesses across Pakistan, GCC, and Australia.",
      "Delivered monthly reporting packages with variance analysis and anomaly flagging.",
      "Devised the Excel formulas and financial logic underpinning Metric's core dashboard.",
    ],
  },
  {
    title: "Finance Officer",
    company: "Jovi Technologies",
    companyUrl: null,
    period: "January 2022 – July 2022",
    bullets: [
      "Managed financial records, reconciliations, and internal reporting for a 500+ employee startup.",
      "Ensured cross-department financial coordination in a high-growth environment.",
    ],
  },
  {
    title: "Tax, Audit and Compliance Intern",
    company: "AET Co., Islamabad",
    companyUrl: null,
    period: "January 2021 – October 2021",
    bullets: [
      "Supported audit engagements and regulatory compliance reporting.",
      "Built foundational expertise in financial accuracy and documentation standards.",
    ],
  },
];

export const FOUNDER_PILLARS = [
  { label: "Vision", text: "A world where small businesses get enterprise-grade financial intelligence without enterprise cost." },
  { label: "Problem", text: "Most SMEs run on spreadsheets or software that wasn't built for how they actually operate." },
  { label: "Solution", text: "Products that fuse real accounting logic with modern software architecture, built by someone who has done both." },
  { label: "Technology", text: "Cloud-native ledgers, automation-first workflows, and AI-assisted reporting." },
  { label: "Future", text: "An ecosystem spanning accounting, automation, data, and business intelligence under one roof." },
];

export const PRODUCTS = [
  {
    name: "BrandFox",
    tagline: "Professional Document Creation Platform",
    description:
      "A document creation platform with two engines: an AI-assisted resume builder for job seekers, and a generator for business reports, documents, and presentations.",
    features: ["AI Resume Builder", "Report Generation", "Document Automation"],
    status: "live" as const,
    url: "https://bfox.pro",
    cta: "Visit bfox.pro",
  },
  {
    name: "Ledgerly",
    tagline: "Bookkeeping Software, In Development",
    description:
      "A bookkeeping platform inspired by QuickBooks Online and Xero, built from the ground up on everything learned architecting Metric's financial infrastructure.",
    features: ["Invoicing", "Bank Reconciliation", "Multi-Currency", "Reporting"],
    status: "development" as const,
    url: "#product",
    cta: "See the product",
  },
];

export const LEDGERLY_CAPABILITIES = [
  "Double-entry accounting engine",
  "Automated bank reconciliation",
  "Multi-currency invoicing",
  "VAT & tax compliance",
  "Inventory tracking",
  "Real-time financial reporting",
];

export const LEDGERLY_KPIS = [
  { label: "Cash", value: "$128K" },
  { label: "Receivables", value: "$42K" },
  { label: "Runway", value: "14 mo" },
];

export const LEDGERLY_BARS = [0.4, 0.6, 0.5, 0.8, 0.65, 0.9, 0.55, 0.75, 0.85, 0.6, 0.7, 0.95];

export const SKILL_GROUPS = [
  { name: "BI & Analytics", items: ["Excel (Expert)", "Power BI", "Tableau", "Dashboard Architecture", "KPI Design", "Real-time Reporting"] },
  { name: "Financial Modeling", items: ["Scenario Analysis", "Revenue Forecasting", "Cash Flow Modeling", "Investor Reporting", "Business Health Scoring"] },
  { name: "Fintech Platforms", items: ["QuickBooks", "Xero", "Zoho Books", "Shopify", "Oracle Financials", "Odoo", "Metric"] },
  { name: "AI & Automation", items: ["AI Workflow Design", "Prompt Engineering", "LLM Product Design", "Process Automation"] },
  { name: "Business Analysis", items: ["BRD / FRD / SRS / PRD", "Requirements Gathering", "Stakeholder Workshops", "UAT Oversight"] },
  { name: "Product & Delivery", items: ["Agile / Kanban", "Sprint Planning", "Stakeholder Management", "Release Coordination"] },
];

export const PROJECTS = [
  {
    title: "Business Health Score Engine",
    description:
      "Designed the formula architecture, weighting logic, and validation framework for Metric's flagship composite KPI — aggregating revenue, payables, receivables, inventory velocity, and cash flow from six platforms into a single interpretable score used by 200K+ businesses.",
    stats: ["200K+ businesses", "190+ countries", "6+ platforms"],
    featured: true,
  },
  {
    title: "MAX: AI Financial Co-Pilot",
    description: "Designed the data architecture enabling real-time natural-language financial answers for business owners.",
    tags: ["AI Architecture", "Fintech"],
    stat: "200K+ users",
  },
  {
    title: "Investor Financial Modeling Suite",
    description: "Built dynamic Excel models for startups targeting funding rounds, contributing to successful raises.",
    tags: ["Excel", "Investor Reporting"],
    stat: "UAE & Pakistan",
  },
  {
    title: "PSX Portfolio Tracker",
    description: "Excel-based portfolio manager with real-time P&L tracking and market dashboards.",
    tags: ["Excel", "Analytics"],
    stat: "Real-time P&L",
  },
];

export const CASE_STUDY_STEPS = [
  { n: 1, label: "Problem", text: "Six disconnected platforms produced six different pictures of business health, with no single score executives could act on." },
  { n: 2, label: "Analysis", text: "Mapped revenue, payables, receivables, inventory velocity, and cash flow across every client dataset to find shared, comparable signals." },
  { n: 3, label: "Strategy", text: "Decided on a weighted composite score rather than a dashboard of separate metrics, prioritizing one number leadership could trust." },
  { n: 4, label: "Solution", text: "Designed the formula architecture, weighting logic, and validation framework for the Business Health Score." },
  { n: 5, label: "Technology", text: "Built the data pipeline aggregating six platforms in real time, feeding the score into Metric's core dashboard and MAX." },
  { n: 6, label: "Business Impact", text: "Now used by 200,000+ businesses across 190+ countries as the single interpretable measure of financial health." },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://linkedin.com/in/muhammad-a-501087209" },
  { label: "GitHub", url: "https://github.com/Python-Terabyte" },
  { label: "Metric Platform", url: "https://metricapp.co/about.html" },
  { label: "Live App", url: "https://web.metricapp.co/login" },
];
