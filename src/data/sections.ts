// Page sections in scroll order. Drives the scrollspy, the navbar, and the mobile dock.
export const sections = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'certifications',
  'contact',
] as const;

export type SectionId = (typeof sections)[number];
