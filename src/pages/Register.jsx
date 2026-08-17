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
import { Link } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("CANDIDATE");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    console.log({
      ...formData,
      role,
    });

    alert("Registration UI working. Backend will be connected later.");
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={5}>

            <Card className="auth-card border-0 shadow-sm">
              <Card.Body className="p-4 p-lg-5">

                <div className="text-center mb-4">
                  <h2 className="fw-bold">
                    Create Your Account
                  </h2>

                  <p className="text-muted">
                    Join SmartHire today
                  </p>
                </div>

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                  {/* Role */}

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      Register As
                    </Form.Label>

                    <div className="d-flex gap-3">

                      <Form.Check
                        type="radio"
                        label="Candidate"
                        name="role"
                        value="CANDIDATE"
                        checked={role === "CANDIDATE"}
                        onChange={(e) => setRole(e.target.value)}
                      />

                      <Form.Check
                        type="radio"
                        label="Recruiter"
                        name="role"
                        value="RECRUITER"
                        checked={role === "RECRUITER"}
                        onChange={(e) => setRole(e.target.value)}
                      />

                    </div>
                  </Form.Group>

                  {/* Name */}

                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>

                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Email */}

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>

                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Password */}

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Confirm Password */}

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>

                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-100"
                  >
                    Create Account
                  </Button>

                </Form>

                <div className="text-center mt-4">
                  <span className="text-muted">
                    Already have an account?{" "}
                  </span>

                  <Link to="/login">
                    Login
                  </Link>
                </div>

              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;