import { useEffect, useState } from "react";
import DashboardNavbar from "../../components/layout/DashboardNavbar";
import ResumeSidebar from "../../components/resume/ResumeSidebar";
import ResumePreview from "../../components/resume/ResumePreview";

import PersonalInfoForm from "../../components/resume/forms/PersonalInfoForm";
import EducationForm from "../../components/resume/forms/EducationForm";
import ExperienceForm from "../../components/resume/forms/ExperienceForm";
import ProjectsForm from "../../components/resume/forms/ProjectsForm";
import SkillsForm from "../../components/resume/forms/SkillsForm";
import CertificationsForm from "../../components/resume/forms/CertificationsForm";
import LanguagesForm from "../../components/resume/forms/LanguagesForm";
import { useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getResumeById, updateResume } from "../../services/resumeService";
import { downloadResume } from "../../utils/downloadResume";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  // Active Sidebar Section
  const { id } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("personal");
  const [previewMode, setPreviewMode] = useState(false);

  // Resume Data
  const [resumeData, setResumeData] = useState({
    personal: {
      photo: "",
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
      summary: "",
    },

    education: [],

    experience: [],

    projects: [],

    skills: [],

    certifications: [],

    languages: [],
  });

  // ==========================
  // Personal Information
  // ==========================

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;

    setResumeData((prev) => ({
      ...prev,

      personal: {
        ...prev.personal,

        [name]: value,
      },
    }));
  };

  // ==========================
  // Education
  // ==========================

  const handleAddEducation = (education) => {
    setResumeData((prev) => ({
      ...prev,

      education: [...prev.education, education],
    }));
  };

  const handleDeleteEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,

      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  const handleAddExperience = (experience) => {
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, experience],
    }));
  };
  console.log("Experience:", resumeData.experience);
  const handleDeleteExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };
  console.log("Experience:", resumeData.experience);

  const handleAddProject = (project) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  };

  const handleDeleteProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };

  const handleAddSkill = (skill) => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const handleDeleteSkill = (id) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item.id !== id),
    }));
  };

  const handleAddCertification = (certificate) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, certificate],
    }));
  };

  const handleDeleteCertification = (id) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((item) => item.id !== id),
    }));
  };

  const handleAddLanguage = (language) => {
    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, language],
    }));
  };

  const handleDeleteLanguage = (id) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.filter((item) => item.id !== id),
    }));
  };

  const handleSaveResume = async () => {
    try {
      await updateResume(id, {
        personalInfo: {
          fullName: resumeData.personal.fullName,
          title: resumeData.personal.title,
          email: resumeData.personal.email,
          phone: resumeData.personal.phone,
          location: resumeData.personal.location,
          linkedin: resumeData.personal.linkedin,
          github: resumeData.personal.github,
          website: resumeData.personal.website,
          summary: resumeData.personal.summary,
        },

        education: resumeData.education,

        experience: resumeData.experience,

        projects: resumeData.projects,

        skills: resumeData.skills,

        certifications: resumeData.certifications,

        languages: resumeData.languages,
      });

      toast.success("Resume saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save resume.");
    }
  };

  useEffect(() => {
    const loadResume = async () => {
      if (!id) return;

      try {
        const response = await getResumeById(id);

        const resume = response.data;

        setResumeData({
          personal: resume.personalInfo || {
            fullName: "",
            title: "",
            email: "",
            phone: "",
            location: "",
            linkedin: "",
            github: "",
            website: "",
            summary: "",
          },

          education: resume.education || [],

          experience: resume.experience || [],

          projects: resume.projects || [],

          skills: resume.skills || [],

          certifications: resume.certifications || [],

          languages: resume.languages || [],
        });
      } catch (error) {
        console.error(error);
      }
    };

    loadResume();
  }, [id]);
  return (
    <>
      <DashboardNavbar />
      <div className="builder-header">
        <h2 className="builder-title">Resume Builder</h2>

        <div className="builder-actions">
          <button
            className={`preview-btn ${previewMode ? "active" : ""}`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            {previewMode ? "✏️ Back to Editor" : "👁 Preview Mode"}
          </button>

          <button
            className="download-btn"
            onClick={() =>
              downloadResume(resumeData.personal.fullName || "Resume")
            }
          >
            ⬇ Download PDF
          </button>

          <button className="save-btn" onClick={handleSaveResume}>
            💾 Save Resume
          </button>
        </div>
      </div>
      <div className={`resume-builder ${previewMode ? "preview-mode" : ""}`}>
        {!previewMode && (
          <ResumeSidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            data={resumeData}
          />
        )}
        {!previewMode && (
          <div className="builder-form">
            {activeSection === "personal" && (
              <PersonalInfoForm
                data={resumeData.personal}
                onChange={handlePersonalChange}
              />
            )}

            {activeSection === "education" && (
              <EducationForm
                education={resumeData.education}
                onAddEducation={handleAddEducation}
                onDeleteEducation={handleDeleteEducation}
              />
            )}

            {activeSection === "experience" && (
              <ExperienceForm
                experience={resumeData.experience}
                onAddExperience={handleAddExperience}
                onDeleteExperience={handleDeleteExperience}
              />
            )}

            {activeSection === "projects" && (
              <ProjectsForm
                projects={resumeData.projects}
                onAddProject={handleAddProject}
                onDeleteProject={handleDeleteProject}
              />
            )}

            {activeSection === "skills" && (
              <SkillsForm
                skills={resumeData.skills}
                onAddSkill={handleAddSkill}
                onDeleteSkill={handleDeleteSkill}
              />
            )}

            {activeSection === "certifications" && (
              <CertificationsForm
                certifications={resumeData.certifications}
                onAddCertification={handleAddCertification}
                onDeleteCertification={handleDeleteCertification}
              />
            )}

            {activeSection === "languages" && (
              <LanguagesForm
                languages={resumeData.languages}
                onAddLanguage={handleAddLanguage}
                onDeleteLanguage={handleDeleteLanguage}
              />
            )}
          </div>
        )}
        <ResumePreview data={resumeData} />
      </div>
    </>
  );
};

export default ResumeBuilder;
