import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

function Navbar() {
  const navigate = useNavigate();

  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <BootstrapNavbar
      expand="lg"
      bg="white"
      className="shadow-sm"
    >
      <Container>

        {/* Logo */}

        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4"
        >
          SmartHire
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="smart-hire-navbar"
        />

        <BootstrapNavbar.Collapse id="smart-hire-navbar">

          {/* Main Navigation */}

          <Nav className="me-auto ms-lg-4">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/jobs">
              Jobs
            </Nav.Link>

          <Nav.Link
  as={Link}
  to="/companies"
>
  Companies
</Nav.Link>

           <Nav.Link
  as={Link}
  to="/about"
>
  About
</Nav.Link>

          </Nav>

          {/* Authentication Navigation */}

          {!isAuthenticated ? (

            <div className="d-flex gap-2">

              <Button
                as={Link}
                to="/login"
                variant="outline-primary"
              >
                Login
              </Button>

              <Button
                as={Link}
                to="/register"
                variant="primary"
              >
                Register
              </Button>

            </div>

          ) : (

            <Dropdown align="end">

              <Dropdown.Toggle
                variant="outline-primary"
                id="user-menu"
              >
                {user?.name || "Account"}
              </Dropdown.Toggle>

              <Dropdown.Menu>

                {/* Candidate */}

                {user?.role === "CANDIDATE" && (
                  <>
                    <Dropdown.Item
                      as={Link}
                      to="/candidate/dashboard"
                    >
                      Dashboard
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={Link}
                      to="/candidate/profile"
                    >
                      My Profile
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={Link}
                      to="/candidate/applications"
                    >
                      My Applications
                    </Dropdown.Item>
                  </>
                )}

                {/* Recruiter */}

                {user?.role === "RECRUITER" && (
                  <>
                    <Dropdown.Item
                      as={Link}
                      to="/recruiter/dashboard"
                    >
                      Dashboard
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={Link}
                      to="/recruiter/jobs"
                    >
                      Manage Jobs
                    </Dropdown.Item>

                    <Dropdown.Item
                      as={Link}
                      to="/recruiter/jobs/create"
                    >
                      Post Job
                    </Dropdown.Item>
                  </>
                )}

                <Dropdown.Divider />

                <Dropdown.Item
                  onClick={handleLogout}
                >
                  Logout
                </Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>

          )}

        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;