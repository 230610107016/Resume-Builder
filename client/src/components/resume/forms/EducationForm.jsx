import { useState } from "react";
import "./EducationForm.css";

const initialState = {
  college: "",
  degree: "",
  branch: "",
  cgpa: "",
  startYear: "",
  endYear: "",
};

const EducationForm = ({ education, onAddEducation, onDeleteEducation }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.college || !formData.degree) return;

    onAddEducation({
      id: Date.now(),
      ...formData,
    });

    setFormData(initialState);
  };

  return (
    <div className="education-form">

      <h2>Education</h2>

      <input
        name="college"
        placeholder="College Name"
        value={formData.college}
        onChange={handleChange}
      />

      <input
        name="degree"
        placeholder="Degree"
        value={formData.degree}
        onChange={handleChange}
      />

      <input
        name="branch"
        placeholder="Branch"
        value={formData.branch}
        onChange={handleChange}
      />

      <div className="education-row">

        <input
          name="cgpa"
          placeholder="CGPA"
          value={formData.cgpa}
          onChange={handleChange}
        />

        <input
          name="startYear"
          placeholder="Start Year"
          value={formData.startYear}
          onChange={handleChange}
        />

        <input
          name="endYear"
          placeholder="End Year"
          value={formData.endYear}
          onChange={handleChange}
        />

      </div>

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        + Add Education
      </button>

      <div className="education-list">

        {education.map((item) => (
          <div className="education-card" key={item.id}>

            <div>

              <h4>{item.college}</h4>

              <p>{item.degree}</p>

              <small>
                {item.startYear} - {item.endYear}
              </small>

            </div>

            <button
              className="delete-btn"
              onClick={() => onDeleteEducation(item.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default EducationForm;