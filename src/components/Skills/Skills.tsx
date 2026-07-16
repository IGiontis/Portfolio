import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap';
import { content as t } from '../../data/content';
import { skillGroups } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="text-body-secondary mb-5">{t.skills.subtitle}</p>
        <Row className="g-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Col md="6" xl="4" key={group.id}>
                <Card className="h-100 rounded-3 hover-lift">
                  <CardBody>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="icon-chip icon-chip-md rounded-3">
                        <Icon aria-hidden />
                      </span>
                      <h3 className="fs-5 fw-bold mb-0">{t.skills.groups[group.id]}</h3>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} pill className="badge-accent">
                          {skill}
                        </Badge>
                      ))}
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
