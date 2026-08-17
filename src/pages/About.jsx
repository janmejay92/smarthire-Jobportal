import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function About() {
  return (
    <div className="about-page py-5">
      <Container>

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            About SmartHire
          </h1>

          <p className="text-muted">
            A modern platform connecting talented candidates
            with great companies.
          </p>
        </div>

        <Row className="justify-content-center">

          <Col lg={9}>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-lg-5">

                <h3 className="fw-bold mb-3">
                  What is SmartHire?
                </h3>

                <p className="text-muted">
                  SmartHire is a job portal designed to make
                  the recruitment process easier for both
                  candidates and recruiters.
                </p>

                <p className="text-muted">
                  Candidates can discover job opportunities,
                  manage their profiles, and track their
                  applications. Recruiters can create jobs,
                  manage applications, and review candidates.
                </p>

                <hr className="my-4" />

                <Row className="g-4">

                  <Col md={4}>
                    <h5 className="fw-bold">
                      For Candidates
                    </h5>

                    <p className="text-muted small">
                      Discover jobs and manage your
                      applications from one place.
                    </p>
                  </Col>

                  <Col md={4}>
                    <h5 className="fw-bold">
                      For Recruiters
                    </h5>

                    <p className="text-muted small">
                      Post jobs and efficiently manage
                      candidates.
                    </p>
                  </Col>

                  <Col md={4}>
                    <h5 className="fw-bold">
                      Simple & Modern
                    </h5>

                    <p className="text-muted small">
                      A clean interface designed for a
                      smooth hiring experience.
                    </p>
                  </Col>

                </Row>

              </Card.Body>
            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default About;