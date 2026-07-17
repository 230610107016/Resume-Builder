import { useState } from "react";
import "./LanguagesForm.css";

const LanguagesForm = ({
  languages,
  onAddLanguage,
  onDeleteLanguage,
}) => {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("Beginner");

  const handleSubmit = () => {
    if (!language.trim()) return;

    onAddLanguage({
      id: Date.now(),
      language,
      level,
    });

    setLanguage("");
    setLevel("Beginner");
  };

  return (
    <div className="languages-form">

      <h2>Languages</h2>

      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Native</option>
      </select>

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        + Add Language
      </button>

      <div className="language-list">

        {languages.map((item) => (
          <div
            className="language-card"
            key={item.id}
          >

            <div>

              <h4>{item.language}</h4>

              <p>{item.level}</p>

            </div>

            <button
              className="delete-btn"
              onClick={() =>
                onDeleteLanguage(item.id)
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

export default LanguagesForm;