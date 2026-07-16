import type { MouseEvent } from 'react';
import { Container, Button } from 'reactstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import { content as t } from '../../data/content';
import { contactInfo } from '../../data/links';
import { scrollToSection } from '../../utils/scroll';
import styles from './Hero.module.css';

export default function Hero() {
  const handleAnchor = (e: MouseEvent<HTMLElement>, section: string) => {
    e.preventDefault();
    scrollToSection(section);
  };

  return (
    <section id="home" className={`min-vh-100 d-flex align-items-center ${styles.hero}`}>
      <Container className="text-center">
        <div className={`icon-chip rounded-circle mx-auto mb-4 ${styles.avatar}`} aria-hidden>
          <FaLaptopCode />
        </div>
        <h1 className="display-3 fw-bolder mb-2">{t.hero.name}</h1>
        <h2 className="fs-3 fw-semibold text-accent mb-4">{t.hero.role}</h2>
        <p className={`lead text-body-secondary mx-auto mb-4 ${styles.tagline}`}>
          {t.hero.tagline}
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
          <Button
            href="#projects"
            onClick={(e) => handleAnchor(e, 'projects')}
            size="lg"
            className="btn-accent"
          >
            {t.hero.viewProjects}
          </Button>
          <Button
            href="#contact"
            onClick={(e) => handleAnchor(e, 'contact')}
            size="lg"
            className="btn-outline-accent"
          >
            {t.hero.contactMe}
          </Button>
        </div>
        <div className="d-flex gap-4 justify-content-center fs-3">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href={`mailto:${contactInfo.email}`} className="social-link" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </section>
  );
}
