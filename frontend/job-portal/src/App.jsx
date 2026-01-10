import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"
import JobSeekerDeshboard from "./pages/JobSeeker/JobSeekerDeshboard"
import JobDetails from "./pages/JobSeeker/JobDetails"
import SavedJobs from "./pages/JobSeeker/SavedJobs"
import UserProfile from "./pages/JobSeeker/UserProfile"
import ProtectedRoute from "./routes/ProtectedRoute"
import EmployerDeshboard from "./pages/Employer/EmployerDeshboard"
import JobsPostingForm from "./pages/Employer/JobsPostingForm"
import MangeJobs from "./pages/Employer/MangeJobs"
import ApplicationViewer from "./pages/Employer/ApplicationViewer"
import EmployerProfile from "./pages/Employer/EmployerProfile"

function App() {
  return (
    <div>
 
      <Router>
        <Routes>
          {/* Pulbic Routes */}
          <Route path="" element={<LandingPage />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeekerDeshboard />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<UserProfile />} />

          {/* Protected Route  */}
          <Route element={<ProtectedRoute requiredRole="employer"/> }>
            <Route path="/employer-dashboard" element={<EmployerDeshboard />} />
            <Route path="/post-jobs" element={<JobsPostingForm />} />
            <Route path="/applicants" element={<ApplicationViewer />} />
            <Route path="/employer-dashboard" element={<EmployerDeshboard />} />
            <Route path="/company-profile" element={<EmployerProfile  />} />
          </Route>

          {/* Catch all Route */}
          <Route path="*" element={<Navigate to="/" replace/>} />

        </Routes>
      </Router>


      <Toaster
        toastOptions={{
          className: "",
          style : {
            fontSize: "13px"
          }
        }}
      ></Toaster>
    </div>
  )
}

export default App
