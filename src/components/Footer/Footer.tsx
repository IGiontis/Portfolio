import { Container } from 'reactstrap';
import { content as t } from '../../data/content';

export default function Footer() {
  return (
    <footer className="py-4 border-top">
      <Container className="text-center">
        <p className="mb-0 small text-body-secondary">
          © {new Date().getFullYear()} Ilias Giontis · {t.footer.builtWith}
        </p>
      </Container>
    </footer>
  );
}
