import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FaMoon, FaSun, FaCode } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../utils/scroll';
import { content } from '../../data/content';
import styles from './NavBar.module.css';

const sections = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'certifications',
  'contact',
] as const;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sections);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <Navbar expand="md" fixed="top" container className="bg-body border-bottom shadow-sm">
      <NavbarBrand
        href="#home"
        onClick={(e) => handleNavClick(e, 'home')}
        className="d-flex align-items-center gap-2 fw-bold"
      >
        <FaCode className="text-accent fs-4" aria-hidden />
        <span>Ilias Giontis</span>
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-md-center" navbar>
          {sections.map((section) => (
            <NavItem key={section}>
              <NavLink
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className={`fw-medium ${styles.navLink} ${
                  activeSection === section ? styles.active : ''
                }`}
              >
                {content.nav[section]}
              </NavLink>
            </NavItem>
          ))}
          <NavItem className="d-flex align-items-center ms-md-2 my-2 my-md-0">
            <button
              type="button"
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
            </button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
