import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <Card className="h-100 border-0 shadow-sm job-card">
      <Card.Body className="p-4">

        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <Card.Title className="fw-bold mb-1">
              {job.title}
            </Card.Title>

            <Card.Text className="text-muted mb-0">
              {job.company}
            </Card.Text>
          </div>

          <Badge bg="primary">
            {job.type}
          </Badge>
        </div>

        <Card.Text className="text-muted">
          📍 {job.location}
        </Card.Text>

        <Card.Text>
          <strong>₹{job.salary}</strong>
        </Card.Text>

        <div className="mb-3">
          {job.skills.map((skill) => (
            <Badge
              key={skill}
              bg="light"
              text="dark"
              className="me-2 mb-2"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <Button
          as={Link}
          to={`/jobs/${job.id}`}
          variant="primary"
          className="w-100"
        >
          View Details
        </Button>

      </Card.Body>
    </Card>
  );
}

export default JobCard;