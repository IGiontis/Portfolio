export interface AboutHighlight {
  value: string;
  label: string;
  /** Optional click behavior: scroll to projects or open the domains modal. */
  action?: 'projects' | 'domains';
}

const aboutHighlights: AboutHighlight[] = [
  { value: '3+', label: 'Years of experience' },
  { value: '3', label: 'Production projects', action: 'projects' },
  { value: '8', label: 'Business domains', action: 'domains' },
];

export const content = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    name: 'Ilias Giontis',
    role: 'Front-End Engineer | React.js Specialist',
    tagline:
      'I build intuitive, high-performance web applications with React and TypeScript — from Figma designs to production.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
  },
  about: {
    title: 'About Me',
    p1: 'Front-End Engineer with a strong focus on building intuitive and visually appealing web applications. My expertise lies in the React ecosystem, where I contribute to production business systems across marine crew management, financial solutions, PMS, project management, CRM, workflows, supply chain management (SCM, vendor management), and admin applications — delivering optimized, high-performance solutions.',
    p2: 'Beyond my day job at Avaca Technologies, I design and deliver complete products end-to-end: a bilingual club website with a full admin panel for a real client, and a personal finance PWA. I care about clean, maintainable code, performance, and meaningful user experiences.',
    p3: 'Passionate about continuous learning and staying current with industry trends — TypeScript, Angular, and AI-assisted development.',
    highlights: aboutHighlights,
    domainsModalTitle: 'Business Domains',
    domains: [
      'Marine crew management',
      'Financial solutions',
      'PMS (planned maintenance)',
      'Project management',
      'CRM',
      'Workflows',
      'SCM (vendor management)',
      'Admin applications',
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies I work with daily',
    groups: {
      frontend: 'Frontend',
      ui: 'UI & Styling',
      data: 'Data & APIs',
      tools: 'Tools',
      learning: 'Currently Learning',
    },
  },
  experience: {
    title: 'Experience & Education',
    work: [
      {
        role: 'Front-End Engineer',
        company: 'Avaca Technologies SA',
        location: 'Remote',
        period: '2023 – Present',
        bullets: [
          'Develop responsive, user-friendly interfaces from Figma designs using React.js, React Hooks, Reactstrap, Bootstrap, and CSS3',
          'Build features for business applications across marine crew management, financial solutions, PMS, project management, CRM, workflows, SCM (vendor management), and admin apps',
          'Implement full CRUD operations (create, read, update, delete with persistence) against backend REST and GraphQL APIs with Axios and TanStack Query',
          'Manage application state efficiently with Redux Toolkit and React Context',
          'Collaborate with the team to deliver high-quality, maintainable code',
        ],
      },
      {
        role: 'Freelance Front-End Developer',
        company: 'Edessaikos FC (client project)',
        location: 'Remote',
        period: '2026',
        bullets: [
          'Designed, built, and delivered a complete bilingual club website with a 13-module admin panel',
          'Owned the full lifecycle: architecture, Firebase data model, Netlify Edge Functions for SEO and share previews, performance and cost work, deployment',
        ],
      },
    ],
    education: {
      degree: 'BSc in Informatics and Telecommunications',
      school: 'Technological Educational Institute of Serres',
      details: [
        'Specialization: Networking',
        'Internship: Field Engineer at OTE — built and maintained network infrastructure',
        'Thesis: House break-in detection simulation using Arduino',
      ],
    },
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Continuous learning, backed by 400+ hours of completed courses',
    hours: 'hours',
    verify: 'Verify',
    showAll: 'Show all certifications',
    showLess: 'Show less',
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of things I have built and shipped',
    liveDemo: 'Live Demo',
    sourceCode: 'GitHub',
    clientProject: 'Client project',
    personalProject: 'Personal project',
    demoAccount: 'Demo account',
    items: {
      edessaikos: {
        name: 'Edessaikos FC',
        description:
          'Bilingual (Greek/English) website and admin system for an amateur football club, live in production and run day-to-day by the club owner with no developer involvement. The public site covers first-team and academy rosters, an auto-derived league table, match pages with line-ups, event timelines, and kick-off countdowns, plus news, gallery, sponsors, and a shop, all managed through a 13-module admin panel.',
        highlights: [
          'Standings derived from a single source of truth: entering scores rebuilds the whole table (wins, draws, losses, goal difference, form), and the club’s own fixtures reconcile automatically, so nothing is entered twice',
          'Netlify Edge Functions give crawlers what a single-page app can’t: per-page titles and Open Graph tags, real 404s, a live sitemap, and a share image for every match composed from both crests and the score',
          'Installable PWA that updates on the visitor’s terms: a new version waits behind an update prompt instead of breaking the open app, with an offline banner, read timeouts, and cached queries for weak mobile networks',
          'Measured performance and cost work: main stylesheet cut from 674 KB to 269 KB, offline precache from 5.8 MB to 2.2 MB, and Firestore kept on the free tier with derived data, batched writes, and pagination',
          'Route-level code splitting with retry on stale chunks, DOMPurify sanitization, and 146 automated tests',
        ],
      },
      myfiwallet: {
        name: 'MyFiWallet',
        description:
          'A personal finance PWA built to answer one question: where does my money actually go? It covers the whole month: spending, recurring bills, goals and investments, loans and debts, and a plan for what’s left. Bilingual (English/Greek), in USD, EUR, or GBP, installable and usable offline.',
        highlights: [
          'Planner and allocation: set your pay once and every bill, goal, and loan payment lands on its day across the months ahead; what’s left splits into budgets seeded from your last three months of spending',
          'Recurring bills on any cycle, with variable amounts that learn your average, pausing, and paying ahead, plus a year-ahead view; each payment is logged as an expense automatically',
          'Loans with fixed or floating rates (Euribor or ECB index plus margin) and interest-free periods, with a payoff view showing the interest and months an extra monthly payment saves',
          'Eleven analytics views, including net worth over time and an income-to-savings waterfall (ECharts, Recharts), and period statements that print or save as PDF',
          '1,043 automated tests across 38 files: the money logic, from bill cycles to loan interest to plan reconciliation, lives in tested pure functions',
        ],
      },
      favmoviesshare: {
        name: 'FavMoviesShare',
        description:
          'Full-featured social movie platform: discover movies, build favorite lists, and share them with other users.',
        highlights: [
          'Complete auth flow and protected routes with React Router',
          'Global state with Redux, server state with React Query',
          'Forms with Formik + Yup validation, UI with Bootstrap and Material UI',
        ],
      },
    },
  },
  contact: {
    title: 'Get In Touch',
    subtitle:
      'I am open to new opportunities and collaborations. Feel free to reach out — I will get back to you as soon as possible.',
    emailMe: 'Email Me',
    location: 'Remote (based in Greece)',
  },
  footer: {
    builtWith: 'Built with React, TypeScript & Reactstrap',
  },
} as const;
