import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesLocation =
      job.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="jobs-page py-5">

      <Container>

        {/* Page Header */}

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Find Your Next Job
          </h1>

          <p className="text-muted">
            Explore opportunities that match your skills and career goals.
          </p>
        </div>


        {/* Search */}

        <div className="bg-white p-4 rounded shadow-sm mb-5">

          <Row className="g-3">

            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Search job title or skill"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>

            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Col>

            <Col md={2}>
              <Button
                variant="primary"
                className="w-100"
                onClick={() => {}}
              >
                Search
              </Button>
            </Col>

          </Row>

        </div>


        {/* Results */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h4 className="fw-bold mb-0">
            Available Jobs
          </h4>

          <span className="text-muted">
            {filteredJobs.length} jobs found
          </span>

        </div>


        {/* Job Cards */}

        <Row className="g-4">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (
              <Col
                key={job.id}
                md={6}
                lg={4}
              >
                <JobCard job={job} />
              </Col>
            ))

          ) : (

            <Col>
              <div className="text-center py-5">

                <h4>No jobs found</h4>

                <p className="text-muted">
                  Try changing your search or location.
                </p>

              </div>
            </Col>

          )}

        </Row>

      </Container>

    </div>
  );
}

export default Jobs;