import api from "./api";

export const applyForJob = (applicationData) => {
  return api.post("/applications", applicationData);
};

export const getMyApplications = () => {
  return api.get("/applications/my");
};

export const getJobApplicants = (jobId) => {
  return api.get(`/applications/job/${jobId}`);
};

export const updateApplicationStatus = (
  applicationId,
  status
) => {
  return api.patch(
    `/applications/${applicationId}/status`,
    { status }
  );
};