import { useState } from "react";
import {
  Container,
  Card,
  Table,
  Badge,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

function Applicants() {
  const { jobId } = useParams();

  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      experience: "2 Years",
      skills: "Java, Spring Boot, MySQL",
      status: "APPLIED",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@example.com",
      experience: "1 Year",
      skills: "Java, React, Spring Boot",
      status: "SHORTLISTED",
    },
    {
      id: 3,
      name: "Aman Kumar",
      email: "aman@example.com",
      experience: "3 Years",
      skills: "Java, Docker, AWS",
      status: "INTERVIEW",
    },
    {
      id: 4,
      name: "Neha Verma",
      email: "neha@example.com",
      experience: "Fresher",
      skills: "Java, Spring Boot, MySQL",
      status: "APPLIED",
    },
  ]);

  const [selectedApplicant, setSelectedApplicant] =
    useState(null);

  const [showModal, setShowModal] = useState(false);

  const updateStatus = (id, status) => {
    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, status }
          : applicant
      )
    );
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "SHORTLISTED":
        return "success";

      case "INTERVIEW":
        return "warning";

      case "SELECTED":
        return "success";

      case "REJECTED":
        return "danger";

      default:
        return "primary";
    }
  };

  const openApplicant = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  return (
    <div className="applicants-page py-5">
      <Container>

        {/* Header */}

        <div className="mb-4">
          <h2 className="fw-bold">
            Job Applicants
          </h2>

          <p className="text-muted">
            Review and manage candidates who applied
            for Job #{jobId}.
          </p>
        </div>

        {/* Applicants Table */}

        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">

            <div className="table-responsive">

              <Table
                hover
                className="mb-0 align-middle"
              >

                <thead className="table-light">

                  <tr>
                    <th>Candidate</th>
                    <th>Experience</th>
                    <th>Skills</th>
                    <th>Status</th>
                    <th>Update Status</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  {applicants.map((applicant) => (

                    <tr key={applicant.id}>

                      <td>
                        <strong>
                          {applicant.name}
                        </strong>

                        <small className="d-block text-muted">
                          {applicant.email}
                        </small>
                      </td>

                      <td>
                        {applicant.experience}
                      </td>

                      <td>
                        {applicant.skills}
                      </td>

                      <td>

                        <Badge
                          bg={getStatusVariant(
                            applicant.status
                          )}
                        >
                          {applicant.status}
                        </Badge>

                      </td>

                      <td>

                        <Form.Select
                          size="sm"
                          value={applicant.status}
                          onChange={(e) =>
                            updateStatus(
                              applicant.id,
                              e.target.value
                            )
                          }
                        >

                          <option value="APPLIED">
                            Applied
                          </option>

                          <option value="SHORTLISTED">
                            Shortlisted
                          </option>

                          <option value="INTERVIEW">
                            Interview
                          </option>

                          <option value="SELECTED">
                            Selected
                          </option>

                          <option value="REJECTED">
                            Rejected
                          </option>

                        </Form.Select>

                      </td>

                      <td>

                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() =>
                            openApplicant(applicant)
                          }
                        >
                          View
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

      {/* Applicant Details Modal */}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>
            Candidate Details
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {selectedApplicant && (
            <>
              <h5 className="fw-bold">
                {selectedApplicant.name}
              </h5>

              <p className="text-muted">
                {selectedApplicant.email}
              </p>

              <hr />

              <p>
                <strong>Experience:</strong>{" "}
                {selectedApplicant.experience}
              </p>

              <p>
                <strong>Skills:</strong>{" "}
                {selectedApplicant.skills}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <Badge
                  bg={getStatusVariant(
                    selectedApplicant.status
                  )}
                >
                  {selectedApplicant.status}
                </Badge>
              </p>

              <Button
                variant="outline-secondary"
                className="mt-2"
              >
                View Resume
              </Button>
            </>
          )}

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default Applicants;