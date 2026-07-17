import { useState } from "react";
import "./SkillsForm.css";

const SkillsForm = ({ skills, onAddSkill, onDeleteSkill }) => {
  const [skill, setSkill] = useState("");

  const handleAdd = () => {
    if (!skill.trim()) return;

    onAddSkill({
      id: Date.now(),
      name: skill.trim(),
    });

    setSkill("");
  };

  return (
    <div className="skills-form">

      <h2>Skills</h2>

      <div className="skill-input">

        <input
          type="text"
          placeholder="Enter a skill (React, Java...)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAdd();
            }
          }}
        />

        <button onClick={handleAdd}>
          + Add
        </button>

      </div>

      <div className="skills-list">

        {skills.map((item) => (
          <div
            key={item.id}
            className="skill-chip"
          >
            <span>{item.name}</span>

            <button
              onClick={() => onDeleteSkill(item.id)}
            >
              ×
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default SkillsForm;