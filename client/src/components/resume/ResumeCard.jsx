import { Link } from "react-router-dom";
import "./ResumeCard.css";

const ResumeCard = ({ resume }) => {
  return (
    <div className="resume-card">
      <div className="resume-card-header">
        <h3>{resume.title}</h3>

        <span className={`status ${resume.status}`}>
          {resume.status}
        </span>
      </div>

      <p>
        <strong>Template:</strong> {resume.template}
      </p>

      <p>
        <strong>Last Updated:</strong>{" "}
        {new Date(resume.updatedAt).toLocaleDateString()}
      </p>

      <Link
        to={`/builder/${resume._id}`}
        className="open-btn"
      >
        Open Resume
      </Link>
    </div>
  );
};

export default ResumeCard;