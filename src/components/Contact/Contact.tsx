import { Container, Button } from 'reactstrap';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { content as t } from '../../data/content';
import { contactInfo } from '../../data/links';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact">
      <Container className="text-center">
        <h2 className="section-title section-title-centered">{t.contact.title}</h2>
        <p className={`text-body-secondary mx-auto mt-4 mb-4 ${styles.subtitle}`}>
          {t.contact.subtitle}
        </p>
        <Button
          href={`mailto:${contactInfo.email}`}
          size="lg"
          className="btn-accent d-inline-flex align-items-center gap-2 mb-5"
        >
          <FaEnvelope aria-hidden /> {t.contact.emailMe}
        </Button>
        <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
          <span className="d-inline-flex align-items-center gap-2 text-body-secondary">
            <FaEnvelope className="text-accent" aria-hidden /> {contactInfo.email}
          </span>
          <span className="d-inline-flex align-items-center gap-2 text-body-secondary">
            <FaMapMarkerAlt className="text-accent" aria-hidden /> {t.contact.location}
          </span>
        </div>
        <div className="d-flex justify-content-center gap-4 fs-3">
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
        </div>
      </Container>
    </section>
  );
}
