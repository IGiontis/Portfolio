import { Container, Row, Col } from 'reactstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { content as t } from '../../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <Container>
        <h2 className="section-title">{t.experience.title}</h2>
        <Row className="mt-4 g-4 gx-lg-5">
          <Col lg="7">
            <div className="d-flex flex-column gap-4">
              {t.experience.work.map((job) => (
                <div key={job.company} className="d-flex gap-3">
                  <div className="icon-chip icon-chip-md rounded-circle">
                    <FaBriefcase aria-hidden />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-baseline gap-3 flex-wrap">
                      <h3 className="fs-5 fw-bold mb-0">{job.role}</h3>
                      <span className="small fw-semibold text-accent text-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-body-secondary fw-medium mt-1 mb-2">
                      {job.company} · {job.location}
                    </p>
                    <ul className="ps-3 mb-0 d-flex flex-column gap-1 text-body-secondary">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="5">
            <div className="d-flex gap-3">
              <div className="icon-chip icon-chip-md rounded-circle">
                <FaGraduationCap aria-hidden />
              </div>
              <div className="flex-grow-1">
                <h3 className="fs-5 fw-bold mb-0">{t.experience.education.degree}</h3>
                <p className="text-body-secondary fw-medium mt-1 mb-2">
                  {t.experience.education.school}
                </p>
                <ul className="ps-3 mb-0 d-flex flex-column gap-1 text-body-secondary">
                  {t.experience.education.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
