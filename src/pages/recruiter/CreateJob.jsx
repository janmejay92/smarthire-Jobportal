import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

function CreateJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    experience: "",
    skills: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Job:", job);

    setSuccess(true);
  };

  return (
    <div className="create-job-page py-5">
      <Container>
        <div className="mb-4">
          <h2 className="fw-bold">Post a New Job</h2>

          <p className="text-muted">
            Create a job opportunity for candidates.
          </p>
        </div>

        {success && (
          <Alert variant="success">
            Job created successfully.
            Backend integration will be added later.
          </Alert>
        )}

        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4 p-lg-5">

            <Form onSubmit={handleSubmit}>
              <Row className="g-4">

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Job Title</Form.Label>

                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="e.g. Java Backend Developer"
                      value={job.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Company</Form.Label>

                    <Form.Control
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={job.company}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>

                    <Form.Control
                      type="text"
                      name="location"
                      placeholder="e.g. Bangalore / Remote"
                      value={job.location}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Salary</Form.Label>

                    <Form.Control
                      type="text"
                      name="salary"
                      placeholder="e.g. 6 - 10 LPA"
                      value={job.salary}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Employment Type</Form.Label>

                    <Form.Select
                      name="type"
                      value={job.type}
                      onChange={handleChange}
                    >
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                      <option>Remote</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Experience</Form.Label>

                    <Form.Control
                      type="text"
                      name="experience"
                      placeholder="e.g. 0-2 years"
                      value={job.experience}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Skills</Form.Label>

                    <Form.Control
                      type="text"
                      name="skills"
                      placeholder="Java, Spring Boot, MySQL"
                      value={job.skills}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Job Description</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={7}
                      name="description"
                      placeholder="Describe the job responsibilities and requirements..."
                      value={job.description}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

              </Row>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="mt-4"
              >
                Publish Job
              </Button>
            </Form>

          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CreateJob;