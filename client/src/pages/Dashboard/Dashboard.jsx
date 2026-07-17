import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardNavbar from "../../components/layout/DashboardNavbar";
import StatsCard from "../../components/dashboard/StatsCard";
import ResumeCard from "../../components/resume/ResumeCard";

import RenameModal from "../../components/modal/RenameModal";
import DeleteModal from "../../components/modal/DeleteModal";
import { downloadResume } from "../../utils/downloadResume";
import { useAuth } from "../../context/AuthContext";

import {
  getMyResumes,
  createResume,
  deleteResume,
  renameResume,
  duplicateResume,
  getResumeById,
} from "../../services/resumeService";

import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [renameOpen, setRenameOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedResume, setSelectedResume] = useState(null);

  // ===========================
  // Dashboard Statistics
  // ===========================

  const total = resumes.length;

  const drafts = resumes.filter((resume) => resume.status === "draft").length;

  const completed = resumes.filter(
    (resume) => resume.status === "completed",
  ).length;

  // ===========================
  // Load Resumes
  // ===========================

  const loadResumes = async () => {
    try {
      const response = await getMyResumes();

      setResumes(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load resumes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResumes();
  }, []);

  // ===========================
  // Create Resume
  // ===========================

  const handleCreateResume = async () => {
    try {
      const response = await createResume();

      toast.success("Resume created successfully.");

      navigate(`/builder/${response.data._id}`);
    } catch (error) {
      toast.error("Unable to create resume.");
    }
  };

  // ===========================
  // Rename Resume
  // ===========================

  const openRenameModal = (resume) => {
    setSelectedResume(resume);
    setRenameOpen(true);
  };

  const handleRenameResume = async (title) => {
    try {
      const response = await renameResume(selectedResume._id, title);

      setResumes((prev) =>
        prev.map((resume) =>
          resume._id === selectedResume._id ? response.data : resume,
        ),
      );

      toast.success("Resume renamed.");

      setRenameOpen(false);

      setSelectedResume(null);
    } catch (error) {
      toast.error("Unable to rename resume.");
    }
  };

  // ===========================
  // Delete Resume
  // ===========================

  const openDeleteModal = (resume) => {
    setSelectedResume(resume);
    setDeleteOpen(true);
  };

  const handleDeleteResume = async () => {
    try {
      await deleteResume(selectedResume._id);

      setResumes((prev) =>
        prev.filter((resume) => resume._id !== selectedResume._id),
      );

      toast.success("Resume deleted.");

      setDeleteOpen(false);

      setSelectedResume(null);
    } catch (error) {
      toast.error("Unable to delete resume.");
    }
  };

  // ===========================
  // Duplicate Resume
  // ===========================

  const handleDuplicate = async (resume) => {
    try {
      const response = await duplicateResume(resume._id);

      toast.success("Resume duplicated!");

      navigate(`/builder/${response.data._id}`);
    } catch (error) {
      toast.error("Unable to duplicate resume.");
    }
  };

  // ===========================
  // Download PDF
  // ===========================

  const handleDownload = async (resume) => {
    try {
      navigate(`/builder/${resume._id}?download=true`);
      downloadResume(resume.personalInfo.fullName || "Resume");

      toast.success("Downloading PDF...");
    } catch (error) {
      console.error(error);

      toast.error("Unable to download PDF.");
    }
  };

  return (
    <>
      <DashboardNavbar />

      <div className="dashboard">
        {/* Header */}

        <div className="dashboard-header">
          <div>
            <h1>Welcome, {user?.fullName || "User"} 👋</h1>

            <p>Manage all your resumes from here.</p>
          </div>

          <button className="create-btn" onClick={handleCreateResume}>
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

          <StatsCard title="Drafts" value={drafts} icon="📝" color="#f59e0b" />

          <StatsCard
            title="Completed"
            value={completed}
            icon="✅"
            color="#10b981"
          />
        </div>

        {/* Resume List */}

        {loading ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : resumes.length === 0 ? (
          <div className="empty-state">
            <h2>No resumes found.</h2>

            <p>Create your first professional resume.</p>

            <button className="create-btn" onClick={handleCreateResume}>
              Create Resume
            </button>
          </div>
        ) : (
          <div className="resume-grid">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume._id}
                resume={resume}
                onRename={() => openRenameModal(resume)}
                onDelete={() => openDeleteModal(resume)}
                onDuplicate={() => handleDuplicate(resume)}
                onDownload={() => handleDownload(resume)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Rename Modal */}

      <RenameModal
        isOpen={renameOpen}
        currentTitle={selectedResume?.title}
        onClose={() => {
          setRenameOpen(false);
          setSelectedResume(null);
        }}
        onSave={handleRenameResume}
      />

      {/* Delete Modal */}

      <DeleteModal
        isOpen={deleteOpen}
        resumeTitle={selectedResume?.title}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedResume(null);
        }}
        onDelete={handleDeleteResume}
      />
    </>
  );
};

export default Dashboard;
