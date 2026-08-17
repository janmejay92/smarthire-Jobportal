import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(categoryFromUrl);

  const filteredJobs = jobs.filter((job) => {

    const matchesSearch =
      !search ||
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    const matchesLocation =
      !location ||
      job.location
        .toLowerCase()
        .includes(location.toLowerCase());

    const matchesCategory =
      !category ||
      job.category?.toLowerCase() ===
        category.toLowerCase();

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory
    );
  });

  const handleSearch = () => {
    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (location.trim()) {
      params.location = location.trim();
    }

    if (category) {
      params.category = category;
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setCategory("");
    setSearchParams({});
  };

  return (
    <div className="jobs-page py-5">

      <Container>

        {/* Page Header */}

        <div className="text-center mb-5">

          <h1 className="fw-bold">
            Find Your Next Job
          </h1>

          <p className="text-muted">
            Explore opportunities that match your
            skills and career goals.
          </p>

        </div>

        {/* Search */}

        <div className="bg-white p-4 rounded shadow-sm mb-5">

          <Row className="g-3">

            {/* Search */}

            <Col md={4}>

              <Form.Control
                type="text"
                placeholder="Search job title or skill"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </Col>

            {/* Location */}

            <Col md={3}>

              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />

            </Col>

            {/* Category */}

            <Col md={3}>

              <Form.Select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >

                <option value="">
                  All Categories
                </option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="Frontend Development">
                  Frontend Development
                </option>

                <option value="Backend Development">
                  Backend Development
                </option>

                <option value="Data Science">
                  Data Science
                </option>

                <option value="DevOps">
                  DevOps
                </option>

                <option value="UI/UX Design">
                  UI/UX Design
                </option>

              </Form.Select>

            </Col>

            {/* Search Button */}

            <Col md={2}>

              <Button
                variant="primary"
                className="w-100"
                onClick={handleSearch}
              >
                Search
              </Button>

            </Col>

          </Row>

          {/* Clear */}

          {(search || location || category) && (

            <div className="mt-3">

              <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={clearFilters}
              >
                Clear all filters
              </Button>

            </div>

          )}

        </div>

        {/* Results Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h4 className="fw-bold mb-1">
              Available Jobs
            </h4>

            {category && (
              <small className="text-muted">
                Category: {category}
              </small>
            )}

          </div>

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

            <Col xs={12}>

              <div className="text-center py-5">

                <h4>
                  No jobs found
                </h4>

                <p className="text-muted">
                  Try changing your search,
                  location, or category.
                </p>

                <Button
                  variant="outline-primary"
                  onClick={clearFilters}
                >
                  View All Jobs
                </Button>

              </div>

            </Col>

          )}

        </Row>

      </Container>

    </div>
  );
}

export default Jobs;