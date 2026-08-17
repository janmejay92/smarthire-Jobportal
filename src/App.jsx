import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import CandidateProfile from "./pages/candidate/CandidateProfile";
import MyApplications from "./pages/candidate/MyApplications";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import CreateJob from "./pages/recruiter/CreateJob";
import ManageJobs from "./pages/recruiter/ManageJobs";
import Applicants from "./pages/recruiter/Applicants";
import NotFound from "./pages/NotFound";
import Companies from "./pages/Companies";
import About from "./pages/About";




function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />
        <Route

        
  path="/companies"
  element={<Companies />}
/>

<Route
  path="/about"
  element={<About />}
/>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
         <Route
  path="/candidate/dashboard"
  element={<CandidateDashboard />}

/>

<Route
  path="/candidate/profile"
  element={<CandidateProfile />}
/>

<Route
  path="/candidate/applications"
  element={<MyApplications />}
/>

<Route
  path="/recruiter/dashboard"
  element={<RecruiterDashboard />}
/>

<Route
  path="/recruiter/jobs/create"
  element={<CreateJob />}
/>

<Route
  path="/recruiter/jobs"
  element={<ManageJobs />}
/>

<Route
  path="/recruiter/jobs/:jobId/applicants"
  element={<Applicants />}
/>

<Route
  path="*"
  element={<NotFound />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;