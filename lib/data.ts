export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Skills", href: "#skills" },
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
  { mark: "CEO", title: "CEO & Director, Quasar Technologies", desc: "Co-founded a studio spanning business software and games. Leads and builds the business suite — BrandFox and Defty — end-to-end." },
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
    name: "Defty Books",
    tagline: "Cloud Accounting Platform, Live",
    description:
      "A full-stack, multi-tenant accounting platform used by 30 businesses. Invoicing, bills, bank reconciliation, financial reporting and a country-aware tax engine covering VAT/GST for 22 jurisdictions. Built with React, NestJS and PostgreSQL.",
    features: ["Double-Entry Ledger", "Bank Reconciliation", "Multi-Currency", "VAT / GST Engine"],
    status: "live" as const,
    url: "https://deftysolutions.com",
    cta: "Visit deftysolutions.com",
  },
];

export const DEFTY_CAPABILITIES = [
  "Double-entry ledger: invoices, bills, expenses, credit notes, journals",
  "Bank reconciliation with score-based match suggestions and split matching",
  "Multi-currency with live rates and auto-reversing FX revaluation",
  "VAT/GST engine for 22 jurisdictions, incl. UAE VAT 201 and UK VAT100",
  "Inventory with weighted-average COGS",
  "P&L, balance sheet, cash flow and custom-metric formula engine",
  "QuickBooks Online import and sync",
];

export const DEFTY_STACK = ["React", "NestJS", "PostgreSQL", "Drizzle", "Redis / BullMQ", "Firebase", "Jest"];

export const DEFTY_KPIS = [
  { label: "Businesses", value: "30" },
  { label: "Jurisdictions", value: "22" },
  { label: "Currencies", value: "Multi" },
];

export const DEFTY_BARS = [0.4, 0.6, 0.5, 0.8, 0.65, 0.9, 0.55, 0.75, 0.85, 0.6, 0.7, 0.95];

export const SKILL_GROUPS = [
  { name: "BI & Analytics", items: ["Excel (Expert)", "Power BI", "Tableau", "Dashboard Architecture", "KPI Design", "Real-time Reporting"] },
  { name: "Financial Modeling", items: ["Scenario Analysis", "Revenue Forecasting", "Cash Flow Modeling", "Investor Reporting", "Business Health Scoring"] },
  { name: "Fintech Platforms", items: ["QuickBooks", "Xero", "Zoho Books", "Shopify", "Oracle Financials", "Odoo", "Metric"] },
  { name: "AI & Automation", items: ["AI Workflow Design", "Prompt Engineering", "LLM Product Design", "Process Automation"] },
  { name: "Business Analysis", items: ["BRD / FRD / SRS / PRD", "Requirements Gathering", "Stakeholder Workshops", "UAT Oversight"] },
  { name: "Product & Delivery", items: ["Agile / Kanban", "Sprint Planning", "Stakeholder Management", "Release Coordination"] },
];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://linkedin.com/in/muhammad-a-501087209" },
  { label: "GitHub", url: "https://github.com/Python-Terabyte" },
  { label: "Metric Platform", url: "https://metricapp.co/about.html" },
  { label: "Live App", url: "https://web.metricapp.co/login" },
];
