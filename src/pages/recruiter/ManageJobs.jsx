import { useState } from "react";
import {
  Container,
  Card,
  Table,
  Badge,
  Button,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ManageJobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Java Backend Developer",
      location: "Bangalore",
      type: "Full Time",
      applications: 24,
      status: "ACTIVE",
    },
    {
      id: 2,
      title: "React Developer",
      location: "Hyderabad",
      type: "Full Time",
      applications: 18,
      status: "ACTIVE",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      location: "Pune",
      type: "Full Time",
      applications: 12,
      status: "CLOSED",
    },
  ]);

  const [showDelete, setShowDelete] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCloseJob = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, status: "CLOSED" }
          : job
      )
    );
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setShowDelete(true);
  };

  const handleDelete = () => {
    setJobs(
      jobs.filter((job) => job.id !== selectedJob.id)
    );

    setShowDelete(false);
    setSelectedJob(null);
  };

  return (
    <div className="manage-jobs-page py-5">
      <Container>

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold">
              Manage Jobs
            </h2>

            <p className="text-muted mb-0">
              Manage the jobs posted by your company.
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

        {/* Jobs Table */}

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
                    <th>Location</th>
                    <th>Type</th>
                    <th>Applications</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {jobs.map((job) => (

                    <tr key={job.id}>

                      <td>
                        <strong>
                          {job.title}
                        </strong>
                      </td>

                      <td>
                        {job.location}
                      </td>

                      <td>
                        {job.type}
                      </td>

                      <td>
                        {job.applications}
                      </td>

                      <td>

                        <Badge
                          bg={
                            job.status === "ACTIVE"
                              ? "success"
                              : "secondary"
                          }
                        >
                          {job.status}
                        </Badge>

                      </td>

                      <td>

                        <div className="d-flex gap-2">

                          <Button
                            as={Link}
                            to={`/recruiter/jobs/${job.id}/applicants`}
                            variant="outline-primary"
                            size="sm"
                          >
                            Applicants
                          </Button>

                          {job.status === "ACTIVE" && (
                            <Button
                              variant="outline-warning"
                              size="sm"
                              onClick={() =>
                                handleCloseJob(job.id)
                              }
                            >
                              Close
                            </Button>
                          )}

                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() =>
                              handleDeleteClick(job)
                            }
                          >
                            Delete
                          </Button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </Table>

            </div>

          </Card.Body>
        </Card>

      </Container>

      {/* Delete Confirmation */}

      <Modal
        show={showDelete}
        onHide={() => setShowDelete(false)}
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title>
            Delete Job
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          Are you sure you want to delete:

          <strong className="d-block mt-2">
            {selectedJob?.title}
          </strong>

          <p className="text-muted mt-2 mb-0">
            This action cannot be undone.
          </p>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={() => setShowDelete(false)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Delete Job
          </Button>

        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default ManageJobs;