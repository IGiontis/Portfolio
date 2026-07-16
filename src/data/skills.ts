import type { IconType } from 'react-icons';
import { FaReact, FaPaintBrush, FaDatabase, FaTools, FaBookOpen } from 'react-icons/fa';

export interface SkillGroup {
  id: 'frontend' | 'ui' | 'data' | 'tools' | 'learning';
  icon: IconType;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    icon: FaReact,
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'React Hooks',
      'Redux / Redux Toolkit',
      'React Context',
      'React Router',
      'HTML5',
    ],
  },
  {
    id: 'ui',
    icon: FaPaintBrush,
    skills: [
      'CSS3',
      'Bootstrap',
      'Reactstrap',
      'Material UI',
      'CSS Modules',
      'Responsive design',
      'Figma to code',
    ],
  },
  {
    id: 'data',
    icon: FaDatabase,
    skills: [
      'REST API integration',
      'Full CRUD operations',
      'Axios',
      'TanStack Query (React Query)',
      'GraphQL (API consumption)',
      'Firebase (Auth, Firestore)',
      'Cloudinary',
      'Postman',
    ],
  },
  {
    id: 'tools',
    icon: FaTools,
    skills: ['Git', 'Vite', 'ESLint', 'Formik + Yup', 'Netlify', 'PWA'],
  },
  {
    id: 'learning',
    icon: FaBookOpen,
    skills: ['TypeScript', 'Node.js'],
  },
];
