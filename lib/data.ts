export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_BADGES = ["ACMA", "Business Analyst", "Quasar Technologies", "SaaS Founder"];

export const COLOR_CYCLE = ["gold", "emerald", "rust"] as const;

export const CONVERGENCE_NODES = [
  { label: "Business", top: "4%", left: "50%" },
  { label: "Finance", top: "30%", left: "84%" },
  { label: "Technology", top: "68%", left: "84%" },
  { label: "Data", top: "92%", left: "50%" },
  { label: "Product", top: "58%", left: "16%" },
];

export const EXECUTIVE_CARDS = [
  { mark: "ACMA", title: "Chartered Management Accountant", desc: "ICMAP-qualified. Understands what numbers mean, why they move, and what decisions they should drive." },
  { mark: "BA", title: "Business Analyst", desc: "BRD / FRD / SRS / PRD authoring, stakeholder workshops, and requirements as engineering source of truth." },
  { mark: "PM", title: "Product Manager", desc: "Designed the Business Health Score and MAX data architecture end-to-end, requirements to production." },
  { mark: "TS", title: "Technology & Accounting Specialist", desc: "Bridges accounting logic and software architecture across QuickBooks, Xero, Zoho, Shopify, and more." },
  { mark: "CEO", title: "CEO & Director, Quasar Technologies", desc: "Co-founded a studio spanning business software and games. Leads and builds the business suite - BrandFox and Defty - end-to-end." },
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
    period: "September 2025 to Present",
    bullets: [
      "Lead external execution across business intelligence, financial analysis, and client delivery.",
      "Developed and improved reporting workflows that reduced reporting time by 75%.",
      "Defined financial and operational metrics supporting 100+ international clients on a platform with $4.2B in global transactions.",
      "Support financial decision-making for 44 businesses through virtual CFO and advisory work.",
    ],
  },
  {
    title: "Business Analyst / Product Manager",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "August 2024 to September 2025",
    bullets: [
      "Designed the Business Health Score methodology, including KPI weighting, validation, and interpretation.",
      "Translated business requirements into structured product and engineering documentation.",
      "Contributed to the data architecture supporting MAX, the platform's AI-assisted financial intelligence experience.",
    ],
  },
  {
    title: "Accounts Analyst",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "July 2022 to August 2024",
    bullets: [
      "Analyzed financial data for 45+ businesses across Pakistan, GCC, and Australia, delivering monthly reporting with variance analysis and anomaly flagging.",
      "Devised the Excel formulas and financial logic underpinning Metric's core dashboard.",
    ],
  },
  {
    title: "Finance Officer",
    company: "Jovi Technologies",
    companyUrl: null,
    period: "January 2022 to July 2022",
    bullets: [
      "Managed financial records, reconciliations, and internal reporting for a 500+ employee startup.",
    ],
  },
  {
    title: "Tax, Audit and Compliance Intern",
    company: "AET Co., Islamabad",
    companyUrl: null,
    period: "January 2021 to October 2021",
    bullets: [
      "Supported audit engagements and regulatory compliance reporting.",
    ],
  },
];

export const FOUNDER_FOCUS = [
  "Build products around real user and business needs.",
  "Design reliable workflows and maintainable systems.",
  "Combine financial domain knowledge with modern software development.",
  "Grow through useful products, transparent communication, and continuous improvement.",
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

export const CASE_STUDIES = [
  {
    name: "BrandFox",
    kicker: "Case study · Document automation",
    role: "Product strategy, requirements, development coordination",
    url: "https://bfox.pro",
    screenshot: "/brandfox.jpg",
    screenshotAlt: "BrandFox homepage at bfox.pro",
    problem:
      "Job seekers and small businesses pay for subscriptions or fight with generic word processors just to produce a professional, ATS-friendly resume or a clean financial report.",
    approach: [
      "Built one platform with two focused engines: an AI-assisted resume builder and a generator for business reports, financial statements, and investor decks.",
      "Made the product free with no watermark on PDF export, so the first document is useful without a sign-up wall.",
      "Structured document templates so output stays consistent and presentable without design skills.",
    ],
    outcome: [
      "Live at bfox.pro with two document builders.",
      "No subscription, no credit card, and no watermarks.",
    ],
    stack: ["AI Resume Builder", "Report Generation", "Document Automation"],
  },
  {
    name: "Defty Books",
    kicker: "Case study · Cloud accounting",
    role: "Product strategy, financial workflows, requirements, development coordination",
    url: "https://deftysolutions.com",
    screenshot: "/defty.jpg",
    screenshotAlt: "Defty Solutions homepage at deftysolutions.com",
    problem:
      "Growing businesses often run on spreadsheets or software that was not built around how they actually operate, which leaves books that are slow to close and hard to trust across currencies and tax regimes.",
    approach: [
      "Modelled every transaction as a balanced double-entry journal, so invoices, bills, expenses, credit notes, and journals all land in one ledger.",
      "Added bank reconciliation with score-based match suggestions, multi-currency with live rates, and a tax engine covering VAT/GST for 22 jurisdictions.",
      "Built reporting on top of the ledger: P&L, balance sheet, cash flow, and a custom-metric formula engine, plus QuickBooks Online import and sync.",
    ],
    outcome: [
      "Live and used by 30 businesses.",
      "Multi-tenant platform built with React, NestJS, and PostgreSQL.",
    ],
    stack: DEFTY_STACK,
  },
];

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
