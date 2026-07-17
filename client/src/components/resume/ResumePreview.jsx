import "./ResumePreview.css";

const ResumePreview = ({ data }) => {
  const personal = data.personal || {};

  return (
    <div className="resume-preview">

      <div id="resume-preview" className="resume-paper">

        {/* ================= HEADER ================= */}

        <header className="resume-header">

          <h1>
            {personal.fullName || "Your Name"}
          </h1>

          <h3>
            {personal.title || "Professional Title"}
          </h3>

          <div className="contact-grid">

            {personal.email && (
              <div className="contact-item">
                <span>📧</span>
                <span>{personal.email}</span>
              </div>
            )}

            {personal.phone && (
              <div className="contact-item">
                <span>📱</span>
                <span>{personal.phone}</span>
              </div>
            )}

            {personal.location && (
              <div className="contact-item">
                <span>📍</span>
                <span>{personal.location}</span>
              </div>
            )}

            {personal.linkedin && (
              <div className="contact-item">
                <span>🔗</span>
                <span>{personal.linkedin}</span>
              </div>
            )}

            {personal.github && (
              <div className="contact-item">
                <span>💻</span>
                <span>{personal.github}</span>
              </div>
            )}

            {personal.website && (
              <div className="contact-item">
                <span>🌐</span>
                <span>{personal.website}</span>
              </div>
            )}

          </div>

        </header>

        {/* ================= SUMMARY ================= */}

        <section className="resume-section">

          <h2>
            Professional Summary
          </h2>

          <p className="summary-text">
            {personal.summary ||
              "Write a professional summary here."}
          </p>

        </section>

        {/* ================= EDUCATION ================= */}

        {data.education.length > 0 && (

          <section className="resume-section">

            <h2>
              Education
            </h2>
                        {data.education.map((edu) => (

              <div
                className="education-item"
                key={edu.id}
              >

                <div className="education-header">

                  <div>

                    <h4>{edu.degree}</h4>

                    <h5>{edu.college}</h5>

                  </div>

                  <span className="date">
                    {edu.startYear} - {edu.endYear}
                  </span>

                </div>

                <p className="branch">
                  {edu.branch}
                </p>

                <p className="cgpa">
                  CGPA : {edu.cgpa}
                </p>

              </div>

            ))}

          </section>

        )}

        {/* ================= EXPERIENCE ================= */}

        {data.experience.length > 0 && (

          <section className="resume-section">

            <h2>
              Experience
            </h2>

            {data.experience.map((exp) => (

              <div
                className="experience-item"
                key={exp.id}
              >

                <div className="experience-header">

                  <div>

                    <h4>
                      {exp.jobTitle}
                    </h4>

                    <h5>
                      {exp.company}
                    </h5>

                  </div>

                  <span className="date">

                    {exp.current
                      ? `${exp.startDate} - Present`
                      : `${exp.startDate} - ${exp.endDate}`}

                  </span>

                </div>

                <p className="company-location">
                  📍 {exp.location}
                </p>

                <p className="employment">
                  {exp.employmentType}
                </p>

                {exp.description && (

                  <ul className="experience-description">

                    {exp.description
                      .split("\n")
                      .filter(Boolean)
                      .map((line, index) => (

                        <li key={index}>
                          {line}
                        </li>

                    ))}

                  </ul>

                )}

              </div>

            ))}

          </section>

        )}

        {/* ================= PROJECTS ================= */}
                {data.projects.length > 0 && (
          <section className="resume-section">
            <h2>Projects</h2>

            {data.projects.map((project) => (
              <div className="project-item" key={project.id}>
                <div className="project-header">
                  <h4>{project.projectName}</h4>

                  <span className="project-tech">
                    {project.technologies}
                  </span>
                </div>

                {project.github && (
                  <p>
                    <strong>GitHub:</strong> {project.github}
                  </p>
                )}

                {project.liveDemo && (
                  <p>
                    <strong>Live Demo:</strong> {project.liveDemo}
                  </p>
                )}

                <p>{project.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* ================= SKILLS ================= */}

        {data.skills.length > 0 && (
          <section className="resume-section">
            <h2>Skills</h2>

            <div className="skills-preview">
              {data.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="skill-badge"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ================= CERTIFICATIONS ================= */}

        {data.certifications.length > 0 && (
          <section className="resume-section">
            <h2>Certifications</h2>

            {data.certifications.map((item) => (
              <div
                className="certificate-item"
                key={item.id}
              >
                <div className="certificate-header">
                  <div>
                    <h4>{item.certificateName}</h4>

                    <p>{item.organization}</p>
                  </div>

                  <span className="date">
                    {item.issueDate}
                  </span>
                </div>

                {item.credentialUrl && (
                  <small>
                    {item.credentialUrl}
                  </small>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ================= LANGUAGES ================= */}

        {data.languages.length > 0 && (
          <section className="resume-section">
            <h2>Languages</h2>

            {data.languages.map((item) => (
              <div
                className="language-item"
                key={item.id}
              >
                <span>
                  <strong>{item.language}</strong>
                </span>

                <span className="language-level">
                  {item.level}
                </span>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;


