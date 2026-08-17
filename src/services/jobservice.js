import api from "./api";

export const getJobs = () => {
  return api.get("/jobs");
};

export const getJobById = (id) => {
  return api.get(`/jobs/${id}`);
};

export const createJob = (jobData) => {
  return api.post("/jobs", jobData);
};

export const updateJob = (id, jobData) => {
  return api.put(`/jobs/${id}`, jobData);
};

export const deleteJob = (id) => {
  return api.delete(`/jobs/${id}`);
};