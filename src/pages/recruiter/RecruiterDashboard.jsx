import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function RecruiterDashboard() {
  const jobs = [
    {
      id: 1,
      title: "Java Backend Developer",
      applications: 24,
      status: "ACTIVE",
    },
    {
      id: 2,
      title: "React Developer",
      applications: 18,
      status: "ACTIVE",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      applications: 12,
      status: "CLOSED",
    },
  ];

  return (
    <div className="dashboard-page py-5">
      <Container>

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold">
              Recruiter Dashboard
            </h2>

            <p className="text-muted mb-0">
              Manage your jobs and candidates.
            </p>
          </div>

          <Button
            as={Link}
            to="/recruiter/jobs/create"
            variant="primary"
          >
            + Post New Job
          </Button>

        </div>

        {/* Statistics */}

        <Row className="g-4 mb-5">

          <Col md={4}>
            <Card className="dashboard-stat-card border-0 shadow-sm">
              <Card.Body>
                <p className="text-muted mb-2">
                  Active Jobs
                </p>

                <h2 className="fw-bold">
                  2
                </h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-stat-card border-0 shadow-sm">
              <Card.Body>
                <p className="text-muted mb-2">
                  Total Applications
                </p>

                <h2 className="fw-bold">
                  54
                </h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-stat-card border-0 shadow-sm">
              <Card.Body>
                <p className="text-muted mb-2">
                  Candidates Shortlisted
                </p>

                <h2 className="fw-bold">
                  8
                </h2>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        {/* Jobs */}

        <Card className="border-0 shadow-sm">

          <Card.Body className="p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h4 className="fw-bold mb-0">
                Your Jobs
              </h4>

              <Button
                as={Link}
                to="/recruiter/jobs"
                variant="outline-primary"
                size="sm"
              >
                Manage Jobs
              </Button>

            </div>

            {jobs.map((job) => (

              <div
                key={job.id}
                className="border-bottom py-3"
              >

                <Row className="align-items-center">

                  <Col md={5}>
                    <h6 className="fw-bold mb-1">
                      {job.title}
                    </h6>

                    <small className="text-muted">
                      Job ID: #{job.id}
                    </small>
                  </Col>

                  <Col md={3}>
                    <span className="text-muted">
                      Applications
                    </span>

                    <div className="fw-bold">
                      {job.applications}
                    </div>
                  </Col>

                  <Col md={2}>
                    <Badge
                      bg={
                        job.status === "ACTIVE"
                          ? "success"
                          : "secondary"
                      }
                    >
                      {job.status}
                    </Badge>
                  </Col>

                  <Col md={2}>
                    <Button
                      as={Link}
                      to={`/recruiter/jobs/${job.id}/applicants`}
                      variant="outline-primary"
                      size="sm"
                    >
                      Applicants
                    </Button>
                  </Col>

                </Row>

              </div>

            ))}

          </Card.Body>

        </Card>

      </Container>
    </div>
  );
}

export default RecruiterDashboard;