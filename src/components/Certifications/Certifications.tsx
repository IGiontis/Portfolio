import { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { FaCertificate, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { content as t } from '../../data/content';
import { certifications } from '../../data/certifications';

const VISIBLE_COUNT = 6;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, VISIBLE_COUNT);

  return (
    <section id="certifications" className="section-alt">
      <Container>
        <h2 className="section-title">{t.certifications.title}</h2>
        <p className="text-body-secondary mb-5">{t.certifications.subtitle}</p>
        <Row className="g-3">
          {visible.map((cert) => (
            <Col md="6" xl="4" key={cert.title}>
              <Card className="h-100 rounded-3 hover-lift">
                <CardBody className="d-flex gap-3 align-items-start">
                  <span className="icon-chip icon-chip-md rounded-3">
                    <FaCertificate aria-hidden />
                  </span>
                  <div>
                    <h3 className="fs-6 fw-bold lh-sm mb-1">{cert.title}</h3>
                    <p className="small text-body-secondary mb-1">
                      {cert.provider}
                      {cert.instructor && ` · ${cert.instructor}`}
                    </p>
                    <p className="small text-body-secondary mb-0">
                      {cert.date}
                      {cert.hours != null && ` · ${cert.hours} ${t.certifications.hours}`}
                      {cert.url && (
                        <>
                          {' · '}
                          <a href={cert.url} target="_blank" rel="noreferrer" className="link-accent">
                            {t.certifications.verify} <FaExternalLinkAlt aria-hidden />
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button
            className="btn-outline-accent d-inline-flex align-items-center gap-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                {t.certifications.showLess} <FaChevronUp aria-hidden />
              </>
            ) : (
              <>
                {t.certifications.showAll} ({certifications.length}) <FaChevronDown aria-hidden />
              </>
            )}
          </Button>
        </div>
      </Container>
    </section>
  );
}
