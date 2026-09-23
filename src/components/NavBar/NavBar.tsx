import type { MouseEvent } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaMoon, FaSun, FaCode } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { scrollToSection } from '../../utils/scroll';
import { content } from '../../data/content';
import { sections } from '../../data/sections';
import styles from './NavBar.module.css';

export default function NavBar({ activeSection }: { activeSection: string }) {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    scrollToSection(section);
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
      <div className="d-flex align-items-center ms-auto">
        {/* Section links on tablet/desktop; on phones the bottom dock takes over. */}
        <Nav className="d-none d-md-flex align-items-center" navbar>
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
        </Nav>
        <button
          type="button"
          onClick={toggleTheme}
          className={`ms-md-2 ${styles.themeToggle}`}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
        </button>
      </div>
    </Navbar>
  );
}
