import {
  Container,
  Card,
  Table,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function MyApplications() {
  const applications = [
    {
      id: 1,
      jobId: 1,
      job: "Java Backend Developer",
      company: "Tech Solutions",
      location: "Bangalore",
      status: "SHORTLISTED",
      date: "10 Aug 2026",
    },
    {
      id: 2,
      jobId: 2,
      job: "React Developer",
      company: "Innovate Labs",
      location: "Hyderabad",
      status: "APPLIED",
      date: "12 Aug 2026",
    },
    {
      id: 3,
      jobId: 3,
      job: "Full Stack Developer",
      company: "Digital Works",
      location: "Pune",
      status: "INTERVIEW",
      date: "14 Aug 2026",
    },
    {
      id: 4,
      jobId: 4,
      job: "Software Engineer",
      company: "CloudTech",
      location: "Delhi",
      status: "REJECTED",
      date: "15 Aug 2026",
    },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case "SHORTLISTED":
        return "success";
      case "INTERVIEW":
        return "warning";
      case "REJECTED":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <div className="applications-page py-5">
      <Container>

        <div className="mb-4">
          <h2 className="fw-bold">
            My Applications
          </h2>

          <p className="text-muted">
            Track the status of your job applications.
          </p>
        </div>

        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">

            <div className="table-responsive">
              <Table
                hover
                className="mb-0 align-middle"
              >
                <thead className="table-light">
                  <tr>
                    <th>Job</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Applied On</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>

                      <td>
                        <strong>
                          {application.job}
                        </strong>
                      </td>

                      <td>
                        {application.company}
                      </td>

                      <td>
                        {application.location}
                      </td>

                      <td>
                        <Badge
                          bg={getStatusVariant(
                            application.status
                          )}
                        >
                          {application.status}
                        </Badge>
                      </td>

                      <td>
                        {application.date}
                      </td>

                      <td>
                        <Button
                          as={Link}
                          to={`/jobs/${application.jobId}`}
                          variant="outline-primary"
                          size="sm"
                        >
                          View Job
                        </Button>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </Table>
            </div>

          </Card.Body>
        </Card>

      </Container>
    </div>
  );
}

export default MyApplications;