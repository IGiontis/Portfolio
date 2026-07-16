/**
 * Smoothly scrolls to a section and mirrors it into the URL hash without a
 * history entry.
 *
 * The animation is driven by a timer instead of native smooth scrolling or
 * requestAnimationFrame: native `scrollIntoView({behavior:'smooth'})` gets
 * cancelled by history API calls in Chromium and is disabled entirely in some
 * environments, which made navigation jump instead of glide.
 */

const NAV_OFFSET = 72; // fixed navbar height, matches scroll-padding-top
const FRAME_MS = 16;

let timer: ReturnType<typeof setTimeout> | null = null;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  history.replaceState(null, '', `#${id}`);
  if (timer !== null) clearTimeout(timer);

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const targetY = Math.max(
    0,
    Math.min(el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, maxScroll),
  );
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  // Longer distances get more time, within sane bounds.
  const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.25));
  const startTime = performance.now();

  const step = () => {
    const progress = Math.min((performance.now() - startTime) / duration, 1);
    window.scrollTo({ top: startY + distance * easeInOutCubic(progress), behavior: 'instant' });
    if (progress < 1) {
      timer = setTimeout(step, FRAME_MS);
    } else {
      timer = null;
    }
  };
  step();
}
