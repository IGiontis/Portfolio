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
          'Route-level code splitting with automatic retry on stale chunks after a deploy, and DOMPurify sanitization on every rich-text render',
        ],
      },
      myfiwallet: {
        name: 'MyFiWallet',
        description:
          'A personal finance app built to answer one question: where does my money actually go? It tracks what comes in and goes out, the bills that recur, what you owe and are owed, and whether the month ahead works. In English or Greek, EUR, USD, or GBP, on a phone or a desktop, online or off.',
        highlights: [
          'Planner that answers “Will I make it?”: the balance day by day over the months ahead, built from pay day, bills, and debts; Allocation splits what’s left and compares the plan with what actually happened',
          'Bills with variable amounts, instalments, custom intervals, and pauses, shown as cards, a list, the next 12 months, or a month timeline that says how much leaves before pay day, plus an overdue list',
          'Loans with fixed or floating rates and interest-free months: monthly payment, finish date, principal vs. interest on every payment, and a “what if” showing the interest saved by paying a little more',
          'Analytics built around net worth, savings rate, pace of the month, and committed vs. free money (Recharts, ECharts), plus a printable statement for any period',
          'Works offline: loaded data stays readable, new entries sync on reconnect, exchange rates are cached with their date, and a “New version” prompt waits until you finish a form',
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
