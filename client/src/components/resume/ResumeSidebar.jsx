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
];

const ResumeSidebar = ({ activeSection, setActiveSection }) => {
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

      <div className="completion">
        <h4>Completion</h4>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <span>0%</span>
      </div>
    </aside>
  );
};

export default ResumeSidebar;
