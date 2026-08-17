import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">
      <Container className="text-center">

        <div className="not-found-content">

          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p className="text-muted">
            Sorry, the page you are looking for does not exist.
          </p>

          <Button
            as={Link}
            to="/"
            variant="primary"
          >
            Back to Home
          </Button>

        </div>

      </Container>
    </div>
  );
}

export default NotFound;