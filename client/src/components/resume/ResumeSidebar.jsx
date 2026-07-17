import "./ResumeSidebar.css";

const sections = [
  {
    id: "personal",
    label: "👤 Personal Information",
  },

  {
    id: "education",
    label: "🎓 Education",
  },

  {
    id: "experience",
    label: "💼 Experience",
  },

  {
    id: "projects",
    label: "📁 Projects",
  },

  {
    id: "skills",
    label: "🛠 Skills",
  },
  {
    id: "certifications",
    label: "📜 Certifications",
  },
  {
    id: "languages",
    label: "🗣 Languages",
  },
];

const ResumeSidebar = ({ activeSection, setActiveSection, data,}) => {
  const totalSections = 7;

  let completed = 0;

  if (data.personal.fullName && data.personal.email) completed++;
  if (data.education.length > 0) completed++;
  if (data.experience.length > 0) completed++;
  if (data.projects.length > 0) completed++;
  if (data.skills.length > 0) completed++;
  if (data.certifications.length > 0) completed++;
  if (data.languages.length > 0) completed++;

  const completion = Math.round((completed / totalSections) * 100);

  return (
    <aside className="resume-sidebar">
      <h2>Resume Builder</h2>

      <p>Select a section</p>

      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>

      <div className="completion-box">
        <h3>Completion</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completion}%` }}
          ></div>
        </div>

        <p>{completion}% Completed</p>
      </div>
    </aside>
  );
};

export default ResumeSidebar;
