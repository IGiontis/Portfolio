import { projectLinks } from './links';

export interface Project {
  id: 'edessaikos' | 'myfiwallet' | 'favmoviesshare';
  tech: string[];
  live: string | null;
  github: string | null;
  isClientProject: boolean;
  demoAccount?: { username: string; password: string };
  accent: string; // gradient used for the card banner
}

export const projects: Project[] = [
  {
    id: 'edessaikos',
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Firebase',
      'TanStack Query',
      'Cloudinary',
      'i18next',
      'PWA',
    ],
    live: projectLinks.edessaikos.live,
    github: projectLinks.edessaikos.github,
    isClientProject: true,
    accent: 'linear-gradient(135deg, #b91c1c 0%, #1e293b 100%)',
  },
  {
    id: 'myfiwallet',
    tech: [
      'React 19',
      'TypeScript',
      'Firebase',
      'Redux Toolkit',
      'React Query',
      'Recharts',
      'Vite',
      'PWA',
    ],
    live: projectLinks.myfiwallet.live,
    github: projectLinks.myfiwallet.github,
    isClientProject: false,
    accent: 'linear-gradient(135deg, #047857 0%, #1e293b 100%)',
  },
  {
    id: 'favmoviesshare',
    tech: [
      'React',
      'Redux',
      'React Query',
      'React Router',
      'Bootstrap',
      'Material UI',
      'Formik',
      'Yup',
      'Axios',
    ],
    live: projectLinks.favmoviesshare.live,
    github: projectLinks.favmoviesshare.github,
    isClientProject: false,
    demoAccount: { username: 'recruiter', password: 'recruiter' },
    accent: 'linear-gradient(135deg, #6d28d9 0%, #1e293b 100%)',
  },
];
