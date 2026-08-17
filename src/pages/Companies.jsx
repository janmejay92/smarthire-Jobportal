import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Tata Consultancy Services",
      jobs: 24,
      location: "Pan India",
      category: "IT Services",
    },
    {
      id: 2,
      name: "Infosys",
      jobs: 18,
      location: "Bangalore",
      category: "Technology",
    },
    {
      id: 3,
      name: "Accenture",
      jobs: 32,
      location: "Multiple Locations",
      category: "Consulting & Technology",
    },
    {
      id: 4,
      name: "Amazon",
      jobs: 15,
      location: "Bangalore / Hyderabad",
      category: "E-Commerce & Technology",
    },
    {
      id: 5,
      name: "Wipro",
      jobs: 21,
      location: "Pan India",
      category: "IT Services",
    },
    {
      id: 6,
      name: "Microsoft",
      jobs: 12,
      location: "Hyderabad / Bangalore",
      category: "Technology",
    },
  ];

  return (
    <div className="companies-page py-5">
      <Container>

        {/* Header */}

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Top Companies
          </h1>

          <p className="text-muted">
            Explore opportunities from leading companies
            hiring on SmartHire.
          </p>
        </div>

        {/* Companies */}

        <Row className="g-4">

          {companies.map((company) => (

            <Col
              key={company.id}
              md={6}
              lg={4}
            >

              <Card className="company-card h-100 border-0 shadow-sm">

                <Card.Body className="p-4">

                  <div className="company-logo mb-3">
                    {company.name.charAt(0)}
                  </div>

                  <h5 className="fw-bold">
                    {company.name}
                  </h5>

                  <p className="text-muted mb-2">
                    {company.category}
                  </p>

                  <p className="small text-muted">
                    📍 {company.location}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-4">

                    <span className="fw-semibold">
                      {company.jobs} Open Jobs
                    </span>

                    <Button
                      as={Link}
                      to={`/jobs?company=${encodeURIComponent(
                        company.name
                      )}`}
                      variant="outline-primary"
                      size="sm"
                    >
                      View Jobs
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </div>
  );
}

export default Companies;