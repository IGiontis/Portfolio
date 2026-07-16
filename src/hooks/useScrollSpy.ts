import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view and mirrors it into the URL hash
 * (via replaceState, so scrolling doesn't pollute browser history).
 */
export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const update = () => {
      // A section is "active" when its top has passed a probe line at 35% of
      // the viewport; the last one to do so wins.
      const probe = window.innerHeight * 0.35;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      // At the very bottom of the page the last section is active even if
      // it's too short to reach the probe line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionIds]);

  useEffect(() => {
    if (window.location.hash !== `#${activeSection}`) {
      history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  return activeSection;
}
