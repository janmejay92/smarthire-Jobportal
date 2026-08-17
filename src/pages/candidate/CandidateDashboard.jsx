import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function CandidateDashboard() {
  const applications = [
    {
      id: 1,
      job: "Java Backend Developer",
      company: "Tech Solutions",
      status: "SHORTLISTED",
    },
    {
      id: 2,
      job: "React Developer",
      company: "Innovate Labs",
      status: "APPLIED",
    },
    {
      id: 3,
      job: "Full Stack Developer",
      company: "Digital Works",
      status: "INTERVIEW",
    },
  ];

  return (
    <div className="dashboard-page py-5">
      <Container>

        {/* Header */}

        <div className="mb-4">
          <h2 className="fw-bold">
            Welcome back, Candidate 👋
          </h2>

          <p className="text-muted">
            Manage your job search and track your applications.
          </p>
        </div>

        {/* Statistics */}

        <Row className="g-4 mb-5">

          <Col md={4}>
            <Card className="dashboard-stat-card border-0 shadow-sm">
              <Card.Body>
                <p className="text-muted mb-2">
                  Applications
                </p>

                <h2 className="fw-bold mb-0">
                  12
                </h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-stat-card border-0 shadow-sm">
              <Card.Body>
                <p className="text-muted mb-2">
                  Shortlisted
                </p>

                <h2 className="fw-bold mb-0">
                  3
                </h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-stat-card border-0 shadow-sm">
              <Card.Body>
                <p className="text-muted mb-2">
                  Interviews
                </p>

                <h2 className="fw-bold mb-0">
                  2
                </h2>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row className="g-4">

          {/* Applications */}

          <Col lg={8}>

            <Card className="border-0 shadow-sm">

              <Card.Body className="p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <h4 className="fw-bold mb-0">
                    Recent Applications
                  </h4>

                  <Button
                    as={Link}
                    to="/candidate/applications"
                    variant="outline-primary"
                    size="sm"
                  >
                    View All
                  </Button>

                </div>

                {applications.map((application) => (

                  <div
                    key={application.id}
                    className="application-item border-bottom py-3"
                  >

                    <div className="d-flex justify-content-between align-items-center">

                      <div>
                        <h6 className="fw-bold mb-1">
                          {application.job}
                        </h6>

                        <p className="text-muted mb-0">
                          {application.company}
                        </p>
                      </div>

                      <Badge
                        bg={
                          application.status === "SHORTLISTED"
                            ? "success"
                            : application.status === "INTERVIEW"
                            ? "warning"
                            : "primary"
                        }
                      >
                        {application.status}
                      </Badge>

                    </div>

                  </div>

                ))}

              </Card.Body>

            </Card>

          </Col>

          {/* Profile */}

          <Col lg={4}>

            <Card className="border-0 shadow-sm mb-4">

              <Card.Body className="p-4">

                <h5 className="fw-bold">
                  Profile Completion
                </h5>

                <div className="d-flex justify-content-between mt-3">
                  <span className="text-muted">
                    75% Complete
                  </span>

                  <span className="fw-bold">
                    75%
                  </span>
                </div>

                <ProgressBar
                  now={75}
                  className="mt-2"
                />

                <Button
                  as={Link}
                  to="/candidate/profile"
                  variant="outline-primary"
                  className="w-100 mt-4"
                >
                  Complete Profile
                </Button>

              </Card.Body>

            </Card>

            <Card className="border-0 shadow-sm">

              <Card.Body className="p-4">

                <h5 className="fw-bold">
                  Find More Jobs
                </h5>

                <p className="text-muted">
                  Discover new opportunities matching your skills.
                </p>

                <Button
                  as={Link}
                  to="/jobs"
                  variant="primary"
                  className="w-100"
                >
                  Browse Jobs
                </Button>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default CandidateDashboard;