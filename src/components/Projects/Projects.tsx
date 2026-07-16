import { Container, Row, Col, Card, CardBody, Badge, Button } from 'reactstrap';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaUserTie, FaUser } from 'react-icons/fa';
import { content as t } from '../../data/content';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects">
      <Container>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="text-body-secondary mb-5">{t.projects.subtitle}</p>
        <Row className="g-4">
          {projects.map((project) => {
            const info = t.projects.items[project.id];
            return (
              <Col lg="4" md="6" key={project.id}>
                <Card className="h-100 rounded-3 overflow-hidden hover-lift">
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center gap-2 p-3 ${styles.banner}`}
                    style={{ background: project.accent }}
                  >
                    <span className={`text-white fs-4 fw-bolder text-center ${styles.bannerTitle}`}>
                      {info.name}
                    </span>
                    <Badge className={styles.typeBadge}>
                      {project.isClientProject ? <FaUserTie aria-hidden /> : <FaUser aria-hidden />}{' '}
                      {project.isClientProject
                        ? t.projects.clientProject
                        : t.projects.personalProject}
                    </Badge>
                  </div>
                  <CardBody className="d-flex flex-column">
                    <p className="text-body-secondary">{info.description}</p>
                    <ul className="list-unstyled d-flex flex-column gap-2 small mb-3">
                      {info.highlights.map((highlight) => (
                        <li key={highlight} className="d-flex gap-2 align-items-start">
                          <FaCheckCircle className="text-accent mt-1 flex-shrink-0" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {project.demoAccount && (
                      <p className="small text-body-secondary">
                        {t.projects.demoAccount}: <code>{project.demoAccount.username}</code> /{' '}
                        <code>{project.demoAccount.password}</code>
                      </p>
                    )}
                    <div className="d-flex flex-wrap gap-2 mb-3 mt-auto">
                      {project.tech.map((tech) => (
                        <Badge key={tech} pill className="badge-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="d-flex gap-2 flex-wrap">
                      {project.live && (
                        <Button
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          size="sm"
                          className="btn-accent d-inline-flex align-items-center gap-2"
                        >
                          <FaExternalLinkAlt aria-hidden /> {t.projects.liveDemo}
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          size="sm"
                          className="btn-outline-accent d-inline-flex align-items-center gap-2"
                        >
                          <FaGithub aria-hidden /> {t.projects.sourceCode}
                        </Button>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
