/** Smoothly scrolls to a section and mirrors it into the URL hash without a history entry. */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
}
