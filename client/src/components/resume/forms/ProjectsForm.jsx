import { useState } from "react";
import "./ProjectsForm.css";

const initialState = {
  projectName: "",
  description: "",
  github: "",
  liveDemo: "",
  technologies: "",
};

const ProjectsForm = ({
  projects,
  onAddProject,
  onDeleteProject,
}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.projectName || !formData.description) return;

    onAddProject({
      id: Date.now(),
      ...formData,
    });

    setFormData(initialState);
  };

  return (
    <div className="projects-form">

      <h2>Projects</h2>

      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        value={formData.projectName}
        onChange={handleChange}
      />

      <textarea
        rows="4"
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub Repository Link"
        value={formData.github}
        onChange={handleChange}
      />

      <input
        type="text"
        name="liveDemo"
        placeholder="Live Demo Link"
        value={formData.liveDemo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="technologies"
        placeholder="Technologies (React, Node.js, MongoDB)"
        value={formData.technologies}
        onChange={handleChange}
      />

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        + Add Project
      </button>

      <div className="project-list">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
          >

            <div>

              <h4>{project.projectName}</h4>

              <p>{project.technologies}</p>

            </div>

            <button
              className="delete-btn"
              onClick={() =>
                onDeleteProject(project.id)
              }
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ProjectsForm;