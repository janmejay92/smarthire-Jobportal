import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";

import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return (
      <Container className="py-5 text-center">
        <h2>Job Not Found</h2>

        <p className="text-muted">
          The job you are looking for does not exist.
        </p>

        <Button as={Link} to="/jobs" variant="primary">
          Browse Jobs
        </Button>
      </Container>
    );
  }

  return (
    <div className="job-details-page py-5">
      <Container>

        {/* Back Button */}

        <Button
          as={Link}
          to="/jobs"
          variant="outline-secondary"
          className="mb-4"
        >
          ← Back to Jobs
        </Button>

        <Row className="g-4">

          {/* Main Job Information */}

          <Col lg={8}>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-lg-5">

                <div className="d-flex justify-content-between align-items-start">

                  <div>
                    <h1 className="fw-bold">
                      {job.title}
                    </h1>

                    <h5 className="text-muted mt-2">
                      {job.company}
                    </h5>
                  </div>

                  <Badge bg="primary">
                    {job.type}
                  </Badge>

                </div>

                <hr />

                <div className="job-info mb-4">

                  <p>
                    📍 <strong>Location:</strong>{" "}
                    {job.location}
                  </p>

                  <p>
                    💰 <strong>Salary:</strong>{" "}
                    ₹{job.salary}
                  </p>

                  <p>
                    💼 <strong>Employment:</strong>{" "}
                    {job.type}
                  </p>

                </div>

                <h4 className="fw-bold mb-3">
                  Job Description
                </h4>

                <p className="text-muted">
                  We are looking for a talented{" "}
                  {job.title} to join our team.
                  The ideal candidate should have
                  strong technical skills and a
                  passion for building scalable
                  and reliable software.
                </p>

                <h4 className="fw-bold mt-4 mb-3">
                  Required Skills
                </h4>

                <div>
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                      bg="light"
                      text="dark"
                      className="me-2 mb-2 p-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h4 className="fw-bold mt-4 mb-3">
                  Responsibilities
                </h4>

                <ul className="text-muted">
                  <li>
                    Develop and maintain scalable applications.
                  </li>

                  <li>
                    Write clean and maintainable code.
                  </li>

                  <li>
                    Collaborate with other developers
                    and team members.
                  </li>

                  <li>
                    Debug and resolve technical issues.
                  </li>

                  <li>
                    Participate in code reviews.
                  </li>
                </ul>

              </Card.Body>
            </Card>

          </Col>

          {/* Apply Section */}

          <Col lg={4}>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">

                <h4 className="fw-bold">
                  Interested in this job?
                </h4>

                <p className="text-muted">
                  Apply now and take the next step
                  in your career.
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100"
                  as={Link}
                  to="/login"
                >
                  Apply Now
                </Button>

                <hr />

                <h6 className="fw-bold">
                  Job Summary
                </h6>

                <p className="mb-2">
                  <strong>Company:</strong>{" "}
                  {job.company}
                </p>

                <p className="mb-2">
                  <strong>Location:</strong>{" "}
                  {job.location}
                </p>

                <p className="mb-2">
                  <strong>Salary:</strong>{" "}
                  ₹{job.salary}
                </p>

                <p className="mb-0">
                  <strong>Type:</strong>{" "}
                  {job.type}
                </p>

              </Card.Body>
            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default JobDetails;