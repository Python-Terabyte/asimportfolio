export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { number: 190, suffix: "+", label: "Countries", sub: "Global Platform Reach" },
  { number: 4.2, prefix: "$", suffix: "B", label: "Transactions Processed", sub: "Pipeline Volume" },
  { number: 200, suffix: "K+", label: "Users Served", sub: "Business Owners" },
  { number: 75, suffix: "%", label: "Faster Reporting", sub: "BI Automation Impact" },
];

export const SERVICES = [
  {
    icon: "LayoutDashboard",
    title: "BI Architecture & Dashboard Design",
    description:
      "Build your BI function from scratch. Metrics framework, dashboard architecture, and reporting automation that drives real decisions.",
    tags: ["Project", "Retainer", "Advisory"],
  },
  {
    icon: "TrendingUp",
    title: "Financial Analytics Consulting",
    description:
      "Turn raw financial data into strategic clarity. Financial modeling, KPI design, forecasting, and investor reporting.",
    tags: ["Project", "Retainer", "Advisory"],
  },
  {
    icon: "Plug",
    title: "Fintech Platform Integration",
    description:
      "Connect your accounting, e-commerce, and financial platforms into a unified analytics ecosystem, scoped and mapped to your business.",
    tags: ["Project", "Advisory"],
  },
  {
    icon: "FileText",
    title: "Business Analysis and Product Delivery",
    description:
      "End-to-end BA delivery for fintech and financial software. Requirements gathering, BRD/FRD authoring, stakeholder workshops, and delivery coordination.",
    tags: ["Project", "Retainer"],
  },
  {
    icon: "Briefcase",
    title: "Virtual CFO Services",
    description:
      "Strategic financial leadership without the full-time cost. Reporting, cash flow oversight, KPI management, and investor communications.",
    tags: ["Retainer", "Advisory"],
  },
  {
    icon: "Bot",
    title: "AI Workflow Design",
    description:
      "Design AI-powered workflows that eliminate manual effort and enable real-time decisions. Process analysis, LLM workflow design, and automation strategy.",
    tags: ["Project", "Advisory"],
  },
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
      "Presented BI findings and strategic recommendations directly to founders and C-suite.",
      "Serves as Virtual CFO for 16 UAE businesses; supporting CFO for 28 more.",
    ],
  },
  {
    title: "Business Analyst / Product Manager",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "August 2024 – September 2025",
    bullets: [
      "Designed the Business Health Score, a composite KPI engine aggregating revenue, payables, receivables, inventory velocity, and cash flow from six platforms into a single interpretable score.",
      "Authored BRDs, FRDs, SRS, and PRDs as the engineering source of truth across all delivery cycles.",
      "Designed the data architecture for MAX, Metric's AI financial co-pilot, enabling real-time natural-language financial answers for business owners.",
      "Coordinated full delivery cycles across engineering, QA, and stakeholders from requirements through production sign-off.",
    ],
  },
  {
    title: "Accounts Analyst",
    company: "Metric HQ",
    companyUrl: "https://metricapp.co",
    period: "July 2022 – August 2024",
    bullets: [
      "Analyzed financial data for 45+ businesses across Pakistan, GCC, and Australia, with datasets up to 15,000 transactions per client per cycle.",
      "Delivered monthly reporting packages with variance analysis, trend identification, and anomaly flagging.",
      "Devised all Excel formulas and financial logic underpinning Metric's core dashboard and reporting features.",
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

export const SKILLS = [
  {
    icon: "BarChart3",
    name: "BI and Analytics",
    items: ["Microsoft Excel (Expert)", "Power BI", "Tableau", "Google Sheets", "Dashboard Architecture", "KPI Design", "Real-time Reporting"],
  },
  {
    icon: "TrendingUp",
    name: "Financial Modeling",
    items: ["Scenario Analysis", "Revenue Forecasting", "Cash Flow Modeling", "Investor Reporting", "Variance Analysis", "Business Health Scoring"],
  },
  {
    icon: "CreditCard",
    name: "Fintech Platforms",
    items: ["QuickBooks", "Xero", "Zoho Books", "Shopify", "Qoyod", "Salla", "Oracle Financials", "Odoo"],
  },
  {
    icon: "Brain",
    name: "AI and Automation",
    items: ["AI Workflow Design", "Prompt Engineering", "LLM Product Design", "Process Automation"],
  },
  {
    icon: "ClipboardList",
    name: "Business Analysis",
    items: ["BRD / FRD / SRS / PRD", "Requirements Gathering", "Stakeholder Workshops", "Process Design", "UAT Oversight"],
  },
  {
    icon: "Layers",
    name: "Product and Delivery",
    items: ["Agile / Kanban", "Sprint Planning", "Stakeholder Management", "Release Coordination"],
  },
];

export const PROJECTS = [
  {
    title: "Business Health Score Engine",
    description:
      "Designed the formula architecture, weighting logic, and validation framework for Metric's flagship composite KPI. Aggregates revenue, payables, receivables, inventory velocity, and cash flow from six platforms into a single interpretable score used by 200K+ businesses.",
    stats: ["200K+ businesses", "190+ countries", "6+ platforms"],
    tags: ["KPI Architecture", "Financial Modeling", "Fintech"],
    liveUrl: "https://metricapp.co/features.html",
    image: null,
    featured: true,
  },
  {
    title: "MAX: AI Financial Co-Pilot",
    description:
      "Designed the data architecture and financial mapping logic enabling MAX, Metric's AI CFO, to answer real-time natural-language financial questions for business owners with no financial background.",
    stats: ["200K+ users", "Real-time answers"],
    tags: ["AI Architecture", "Data Modeling", "Fintech"],
    liveUrl: "https://metricapp.co",
    image: null,
    featured: false,
  },
  {
    title: "Investor Financial Modeling Suite",
    description:
      "Built dynamic Excel financial models for startup clients targeting funding rounds. Incorporated scenario analysis, revenue forecasting, and cash flow modeling. Contributed directly to successful raises.",
    stats: ["Multiple startups", "UAE and Pakistan"],
    tags: ["Excel", "Financial Modeling", "Investor Reporting"],
    liveUrl: null,
    image: "/screenshots/financial-model.png",
    featured: false,
  },
  {
    title: "PSX Investment Portfolio Tracker",
    description:
      "Built an Excel-based portfolio manager with real-time P&L tracking, portfolio mix analysis, and market movement dashboards integrated with Pakistan Stock Exchange data.",
    stats: ["Real-time P&L", "Portfolio analytics"],
    tags: ["Excel", "Financial Analytics"],
    liveUrl: null,
    image: "/screenshots/psx-tracker.png",
    featured: false,
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/muhammad-a-501087209",
  },
  {
    label: "GitHub",
    icon: "Github",
    url: "https://github.com/Python-Terabyte",
  },
  {
    label: "Metric Platform",
    icon: "ExternalLink",
    url: "https://metricapp.co/about.html",
  },
  {
    label: "Live App",
    icon: "Globe",
    url: "https://web.metricapp.co/login",
  },
];
