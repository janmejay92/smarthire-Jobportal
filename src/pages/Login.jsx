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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [role, setRole] = useState("CANDIDATE");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");

    // Temporary frontend authentication
    // Real backend/JWT authentication will be connected later.
    const userData = {
      name:
        role === "CANDIDATE"
          ? "Candidate User"
          : "Recruiter User",

      email: email,

      role: role,
    };

    // Save user in AuthContext
    login(userData);

    // Redirect according to role
    if (role === "CANDIDATE") {
      navigate("/candidate/dashboard");
    } else {
      navigate("/recruiter/dashboard");
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={5}>

            <Card className="auth-card border-0 shadow-sm">
              <Card.Body className="p-4 p-lg-5">

                {/* Header */}

                <div className="text-center mb-4">

                  <h2 className="fw-bold">
                    Welcome Back
                  </h2>

                  <p className="text-muted">
                    Login to your SmartHire account
                  </p>

                </div>

                {/* Error */}

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                {/* Role Selection */}

                <Form.Group className="mb-4">

                  <Form.Label className="fw-semibold">
                    Login As
                  </Form.Label>

                  <div className="d-flex gap-4">

                    <Form.Check
                      type="radio"
                      label="Candidate"
                      name="role"
                      value="CANDIDATE"
                      checked={role === "CANDIDATE"}
                      onChange={(e) =>
                        setRole(e.target.value)
                      }
                    />

                    <Form.Check
                      type="radio"
                      label="Recruiter"
                      name="role"
                      value="RECRUITER"
                      checked={role === "RECRUITER"}
                      onChange={(e) =>
                        setRole(e.target.value)
                      }
                    />

                  </div>

                </Form.Group>

                {/* Login Form */}

                <Form onSubmit={handleSubmit}>

                  {/* Email */}

                  <Form.Group className="mb-3">

                    <Form.Label>
                      Email Address
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />

                  </Form.Group>

                  {/* Password */}

                  <Form.Group className="mb-3">

                    <Form.Label>
                      Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />

                  </Form.Group>

                  {/* Forgot Password */}

                  <div className="text-end mb-4">

                    <Link
                      to="/forgot-password"
                      className="small"
                    >
                      Forgot Password?
                    </Link>

                  </div>

                  {/* Login Button */}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100"
                    size="lg"
                  >
                    Login
                  </Button>

                </Form>

                {/* Register */}

                <div className="text-center mt-4">

                  <span className="text-muted">
                    Don't have an account?{" "}
                  </span>

                  <Link to="/register">
                    Create Account
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

export default Login;