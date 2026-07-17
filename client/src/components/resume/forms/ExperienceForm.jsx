import { useState } from "react";
import "./ExperienceForm.css";

const initialState = {
  jobTitle: "",
  company: "",
  location: "",
  employmentType: "",
  startDate: "",
  endDate: "",
  current: false,
  description: "",
};

const ExperienceForm = ({
  experience,
  onAddExperience,
  onDeleteExperience,
}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.jobTitle || !formData.company) return;

    onAddExperience({
      id: Date.now(),
      ...formData,
    });

    setFormData(initialState);
  };

  return (
    <div className="experience-form">

      <h2>Experience</h2>

      <input
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
      />

      <input
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <input
        name="employmentType"
        placeholder="Employment Type (Internship / Full Time)"
        value={formData.employmentType}
        onChange={handleChange}
      />

      <div className="experience-row">

        <input
          type="month"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <input
          type="month"
          name="endDate"
          value={formData.endDate}
          disabled={formData.current}
          onChange={handleChange}
        />

      </div>

      <label className="checkbox">

        <input
          type="checkbox"
          name="current"
          checked={formData.current}
          onChange={handleChange}
        />

        Currently Working Here

      </label>

      <textarea
        rows="5"
        name="description"
        placeholder="Describe your work..."
        value={formData.description}
        onChange={handleChange}
      />

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        + Add Experience
      </button>

      <div className="experience-list">

        {experience.map((item) => (

          <div
            key={item.id}
            className="experience-card"
          >

            <div>

              <h4>{item.jobTitle}</h4>

              <p>{item.company}</p>

            </div>

            <button
              className="delete-btn"
              onClick={() =>
                onDeleteExperience(item.id)
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

export default ExperienceForm;