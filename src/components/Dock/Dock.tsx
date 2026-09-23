import type { MouseEvent } from 'react';
import type { IconType } from 'react-icons';
import {
  FaUser,
  FaLayerGroup,
  FaBriefcase,
  FaFolderOpen,
  FaCertificate,
  FaEnvelope,
} from 'react-icons/fa';
import { content } from '../../data/content';
import type { SectionId } from '../../data/sections';
import { scrollToSection } from '../../utils/scroll';
import styles from './Dock.module.css';

const items: { id: Exclude<SectionId, 'home'>; icon: IconType; short?: string }[] = [
  { id: 'about', icon: FaUser },
  { id: 'skills', icon: FaLayerGroup },
  { id: 'experience', icon: FaBriefcase },
  { id: 'projects', icon: FaFolderOpen },
  { id: 'certifications', icon: FaCertificate, short: 'Certs' },
  { id: 'contact', icon: FaEnvelope },
];

/**
 * Phone navigation: a floating dock within thumb reach instead of a hamburger
 * menu. Always visible, and the current section expands to show its name.
 * Home is the brand link in the top bar.
 */
export default function Dock({ activeSection }: { activeSection: string }) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    scrollToSection(section);
  };

  return (
    <nav className={`d-md-none ${styles.dock}`} aria-label="Sections">
      {items.map(({ id, icon: Icon, short }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            aria-label={content.nav[id]}
            aria-current={isActive ? 'location' : undefined}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
          >
            <Icon className={styles.icon} aria-hidden />
            <span className={styles.label} aria-hidden>
              {short ?? content.nav[id]}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
