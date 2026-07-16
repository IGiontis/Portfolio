import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { FaBriefcase } from 'react-icons/fa';
import { content as t } from '../../data/content';
import { scrollToSection } from '../../utils/scroll';
import styles from './About.module.css';

export default function About() {
  const [domainsOpen, setDomainsOpen] = useState(false);

  return (
    <section id="about" className="section-alt">
      <Container>
        <h2 className="section-title">{t.about.title}</h2>
        <Row className="mt-4">
          <Col lg="8">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="mb-0">{t.about.p3}</p>
          </Col>
          <Col lg="4" className="mt-4 mt-lg-0">
            <div className="d-flex flex-row flex-lg-column flex-wrap gap-3">
              {t.about.highlights.map((item) => {
                const isClickable = Boolean(item.action);
                const handleClick = () => {
                  if (item.action === 'projects') scrollToSection('projects');
                  else if (item.action === 'domains') setDomainsOpen(true);
                };
                return (
                  <div
                    key={item.label}
                    className={`d-flex align-items-center gap-3 p-3 rounded-3 bg-body border flex-fill ${
                      isClickable ? styles.clickable : ''
                    }`}
                    onClick={isClickable ? handleClick : undefined}
                    role={isClickable ? 'button' : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    onKeyDown={
                      isClickable
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleClick();
                            }
                          }
                        : undefined
                    }
                  >
                    <span className={`fs-2 fw-bolder text-accent ${styles.value}`}>
                      {item.value}
                    </span>
                    <span className="text-body-secondary fw-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={domainsOpen} toggle={() => setDomainsOpen(false)} centered>
        <ModalHeader toggle={() => setDomainsOpen(false)}>{t.about.domainsModalTitle}</ModalHeader>
        <ModalBody>
          <ListGroup flush>
            {t.about.domains.map((domain) => (
              <ListGroupItem key={domain} className="d-flex align-items-center gap-3 px-0">
                <FaBriefcase className="text-accent flex-shrink-0" aria-hidden />
                {domain}
              </ListGroupItem>
            ))}
          </ListGroup>
        </ModalBody>
      </Modal>
    </section>
  );
}
