export interface Certification {
  title: string;
  provider: string;
  instructor?: string;
  date: string; // e.g. "Mar 2025"
  hours?: number;
  url?: string;
}

// Ordered newest → oldest.
export const certifications: Certification[] = [
  {
    title: 'AI Fluency: Framework & Foundations',
    provider: 'Anthropic',
    date: 'May 2026',
    url: 'https://verify.skilljar.com/c/sq6gzg2kdwkc',
  },
  {
    title: 'Claude 101',
    provider: 'Anthropic',
    date: 'Apr 2026',
    url: 'https://verify.skilljar.com/c/65jyi82nuxh3',
  },
  {
    title: 'React Native - The Practical Guide',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    date: 'Aug 2025',
    hours: 28.5,
    url: 'https://ude.my/UC-aca19241-3a45-43b7-8218-3d1c89cdffca',
  },
  {
    title: 'React & TypeScript - The Practical Guide',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    date: 'May 2025',
    hours: 7.5,
    url: 'https://ude.my/UC-092d2763-0482-44f3-b991-35aef7780818',
  },
  {
    title: 'The Ultimate React Course 2024: React, Next.js, Redux & More',
    provider: 'Udemy',
    instructor: 'Jonas Schmedtmann',
    date: 'Mar 2025',
    hours: 84,
    url: 'https://ude.my/UC-8280947b-28dd-4db7-8efa-aa4ce120283e',
  },
  {
    title: 'The Complete React Native + Hooks Course',
    provider: 'Udemy',
    instructor: 'Stephen Grider',
    date: 'Sep 2023',
    hours: 38.5,
    url: 'https://ude.my/UC-9f8adca8-1a35-49b2-9db1-390bc09d0e78',
  },
  {
    title: 'Bootstrap 5 Course - The Complete Guide Step by Step',
    provider: 'Udemy',
    instructor: 'Fatah Gabrial',
    date: 'Aug 2023',
    hours: 21.5,
    url: 'https://ude.my/UC-af1d33c3-34ca-46d8-83e5-6cfa868321eb',
  },
  {
    title: 'React - The Complete Guide (incl. React Router & Redux)',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    date: 'Jul 2023',
    hours: 51,
    url: 'https://ude.my/UC-8b2f9411-7d8c-46fd-96ae-c6cb65942c38',
  },
  {
    title: 'Angular & NodeJS - The MEAN Stack Guide',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    date: 'Jun 2023',
    hours: 12.5,
    url: 'https://ude.my/UC-61b2c9df-3f0a-429d-91fd-4acc605906bb',
  },
  {
    title: 'Angular - The Complete Guide',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    date: 'Jun 2023',
    hours: 36.5,
    url: 'https://ude.my/UC-78249164-a89a-48be-80e0-950eb54de9eb',
  },
  {
    title: 'The Git & Github Bootcamp',
    provider: 'Udemy',
    instructor: 'Colt Steele',
    date: 'Apr 2023',
    hours: 17,
    url: 'https://ude.my/UC-0b6b352c-88ac-4f4e-b591-ca4d0fd12bec',
  },
  {
    title: 'Understanding TypeScript',
    provider: 'Udemy',
    instructor: 'Maximilian Schwarzmüller',
    date: 'Jan 2023',
    hours: 15,
    url: 'https://ude.my/UC-cb1c9cc1-d812-4a47-8cef-bcb0c360a050',
  },
  {
    title: 'The Complete JavaScript Course: From Zero to Expert!',
    provider: 'Udemy',
    instructor: 'Jonas Schmedtmann',
    date: 'Oct 2022',
    hours: 69,
    url: 'https://ude.my/UC-3ff8a44c-91ce-47ce-832f-0f9e760b17ac',
  },
  {
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    provider: 'Udemy',
    instructor: 'Jonas Schmedtmann',
    date: 'Apr 2022',
    hours: 37.5,
    url: 'https://ude.my/UC-9aa4685a-a239-4186-afab-dddf801ce09b',
  },
];

export const totalCertificationHours = Math.round(
  certifications.reduce((sum, cert) => sum + (cert.hours ?? 0), 0),
);
