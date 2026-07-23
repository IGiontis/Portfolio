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
          'Owned the full lifecycle: architecture, Firebase backend design, performance and cost engineering, deployment',
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
          'Bilingual (EL/EN) website and content management system for an amateur football club — live in production and run day-to-day by the club owner with zero developer involvement. Public site covers first-team and youth-academy rosters, an auto-derived league table, a full match center (lineups, goals, cards, subs, extra time, penalties), news, gallery, sponsors, and shop, plus a 13-module admin panel usable without any technical knowledge.',
        highlights: [
          'Auto-derived standings from a single source of truth: entering scores computes the full table (W/D/L, goal difference, form), and Edessaikos’s own fixtures reconcile automatically — no double data entry',
          'Firestore cost engineering to stay on the free tier: derived-not-stored data, one settings doc instead of a collection, chunked batch writes, and pagination',
          'Installable PWA with light/dark theme, animated splash screen, and offline resilience (read timeouts, retry, localStorage-cached queries)',
          'Route-based code-splitting with automatic retry on stale post-deploy chunks; heavy admin-only libraries never ship in the public bundle',
          'Firestore security rules, DOMPurify XSS sanitization, auth-gated admin, and 89 automated tests (Vitest)',
        ],
      },
      myfiwallet: {
        name: 'MyFiWallet',
        description:
          'Personal finance PWA for managing income, expenses, savings goals, and investments in one place. Built to answer a simple question: where does my money actually go?',
        highlights: [
          'Financial overview with weekly cash-flow charts (Recharts)',
          'Transaction tracking with calendar view and category filters',
          'Investment portfolio with recurring contributions and savings goals with deadlines',
          'Live USD/EUR/GBP conversion via Exchange Rate API, Google sign-in via Firebase',
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
