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

function CandidateProfile() {
  const [profile, setProfile] = useState({
    name: "Janmejay Kumar",
    email: "janmejay@example.com",
    phone: "",
    location: "India",
    headline: "Java Backend Developer",
    skills: "Java, Spring Boot, MySQL, Hibernate",
    education: "Bachelor of Engineering - Computer Science",
    experience: "Fresher",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Profile:", profile);

    setSaved(true);
  };

  return (
    <div className="profile-page py-5">
      <Container>

        <div className="mb-4">
          <h2 className="fw-bold">My Profile</h2>
          <p className="text-muted">
            Keep your profile updated to improve your job opportunities.
          </p>
        </div>

        {saved && (
          <Alert variant="success">
            Profile updated successfully.
          </Alert>
        )}

        <Row>
          <Col lg={8}>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">

                <Form onSubmit={handleSubmit}>

                  <Row className="g-3">

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Full Name</Form.Label>

                        <Form.Control
                          type="text"
                          name="name"
                          value={profile.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>

                        <Form.Control
                          type="email"
                          name="email"
                          value={profile.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Phone</Form.Label>

                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          value={profile.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Location</Form.Label>

                        <Form.Control
                          type="text"
                          name="location"
                          value={profile.location}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Professional Headline</Form.Label>

                        <Form.Control
                          type="text"
                          name="headline"
                          value={profile.headline}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Skills</Form.Label>

                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="skills"
                          value={profile.skills}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Education</Form.Label>

                        <Form.Control
                          type="text"
                          name="education"
                          value={profile.education}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Experience</Form.Label>

                        <Form.Select
                          name="experience"
                          value={profile.experience}
                          onChange={handleChange}
                        >
                          <option>Fresher</option>
                          <option>0-1 Years</option>
                          <option>1-3 Years</option>
                          <option>3-5 Years</option>
                          <option>5+ Years</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                  </Row>

                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-4"
                  >
                    Save Profile
                  </Button>

                </Form>

              </Card.Body>
            </Card>

          </Col>

          <Col lg={4} className="mt-4 mt-lg-0">

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">

                <h5 className="fw-bold">
                  Profile Tips
                </h5>

                <ul className="text-muted mt-3">
                  <li className="mb-2">
                    Keep your skills updated.
                  </li>

                  <li className="mb-2">
                    Add relevant technical skills.
                  </li>

                  <li className="mb-2">
                    Keep your professional headline clear.
                  </li>

                  <li>
                    Complete your education details.
                  </li>
                </ul>

              </Card.Body>
            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default CandidateProfile;