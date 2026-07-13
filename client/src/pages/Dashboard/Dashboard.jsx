import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import StatsCard from "../../components/dashboard/StatsCard";
import ResumeCard from "../../components/resume/ResumeCard";

import { useAuth } from "../../context/AuthContext";
import {
  getMyResumes,
  createResume,
} from "../../services/resumeService";

import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dashboard Statistics
  const total = resumes.length;

  const drafts = resumes.filter(
    (resume) => resume.status === "draft"
  ).length;

  const completed = resumes.filter(
    (resume) => resume.status === "completed"
  ).length;

  const loadResumes = async () => {
    try {
      const response = await getMyResumes();

      setResumes(response.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to load resumes."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  const handleCreateResume = async () => {
    try {
      const response = await createResume();

      toast.success("Resume created!");

      navigate(`/builder/${response.data._id}`);
    } catch (error) {
      toast.error("Unable to create resume.");
    }
  };

  return (
    <>
      <DashboardNavbar />

      <div className="dashboard">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>
              Welcome, {user?.fullName || "User"} 👋
            </h1>

            <p>
              Manage all your resumes from here.
            </p>
          </div>

          <button
            onClick={handleCreateResume}
            className="create-btn"
          >
            + Create Resume
          </button>
        </div>

        {/* Statistics */}
        <div className="stats-grid">

          <StatsCard
            title="Total Resumes"
            value={total}
            icon="📄"
            color="#2563eb"
          />

          <StatsCard
            title="Drafts"
            value={drafts}
            icon="📝"
            color="#f59e0b"
          />

          <StatsCard
            title="Completed"
            value={completed}
            icon="✅"
            color="#10b981"
          />

        </div>

        {/* Content */}

        {loading ? (
          <h3>Loading...</h3>
        ) : resumes.length === 0 ? (
          <div className="empty-state">
            <h2>No resumes yet.</h2>

            <p>Create your first professional resume.</p>

            <button
              className="create-btn"
              onClick={handleCreateResume}
            >
              Create Resume
            </button>
          </div>
        ) : (
          <div className="resume-grid">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume._id}
                resume={resume}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;