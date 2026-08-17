import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={7}>
              <h1 className="display-4 fw-bold">
                Find Your
                <span className="text-primary"> Dream Job</span>
              </h1>

              <p className="lead text-muted mt-3">
                Discover opportunities, connect with top companies,
                and take the next step in your career with SmartHire.
              </p>

              {/* Job Search */}
              <div className="bg-white p-3 rounded shadow-sm mt-4">
                <Row className="g-2">
                  <Col md={5}>
                    <Form.Control
                      type="text"
                      placeholder="Job title, skills..."
                    />
                  </Col>

                  <Col md={4}>
                    <Form.Control
                      type="text"
                      placeholder="Location"
                    />
                  </Col>

                  <Col md={3}>
                    <Button
                      as={Link}
                      to="/jobs"
                      variant="primary"
                      className="w-100"
                    >
                      Search Jobs
                    </Button>
                  </Col>
                </Row>
              </div>

              <div className="mt-4">
                <Button
                  as={Link}
                  to="/jobs"
                  variant="primary"
                  size="lg"
                  className="me-2"
                >
                  Browse Jobs
                </Button>

                <Button
                  as={Link}
                  to="/register"
                  variant="outline-primary"
                  size="lg"
                >
                  Create Account
                </Button>
              </div>
            </Col>

            <Col lg={5} className="text-center mt-5 mt-lg-0">
              <div className="hero-placeholder">
                <div className="display-1">💼</div>
                <h3 className="fw-bold mt-3">
                  Your Career Starts Here
                </h3>
                <p className="text-muted">
                  Find opportunities that match your skills.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Popular Job Categories</h2>
            <p className="text-muted">
              Explore opportunities across different fields.
            </p>
          </div>

          <Row className="g-4">
            {[
              "Software Development",
              "Data Science",
              "Frontend Development",
              "Backend Development",
              "DevOps",
              "UI/UX Design",
            ].map((category) => (
              <Col md={6} lg={4} key={category}>
                <div className="category-card bg-white p-4 rounded shadow-sm">
                  <h5 className="fw-bold">{category}</h5>
                  <p className="text-muted mb-0">
                    Explore latest {category.toLowerCase()} jobs.
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">How SmartHire Works</h2>
            <p className="text-muted">
              Finding your next opportunity is simple.
            </p>
          </div>

          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="p-4">
                <div className="display-5 mb-3">🔍</div>
                <h5 className="fw-bold">Find Jobs</h5>
                <p className="text-muted">
                  Search and discover jobs that match your skills.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4">
                <div className="display-5 mb-3">📝</div>
                <h5 className="fw-bold">Apply Easily</h5>
                <p className="text-muted">
                  Apply to your preferred jobs with just a few clicks.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4">
                <div className="display-5 mb-3">🚀</div>
                <h5 className="fw-bold">Get Hired</h5>
                <p className="text-muted">
                  Track your applications and land your dream job.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="fw-bold">
            Ready to Find Your Next Opportunity?
          </h2>

          <p className="mt-3">
            Create your SmartHire account and start exploring jobs today.
          </p>

          <Button
            as={Link}
            to="/register"
            variant="light"
            size="lg"
            className="mt-2"
          >
            Get Started
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Home;