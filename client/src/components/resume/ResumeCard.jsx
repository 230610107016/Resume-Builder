import { useNavigate } from "react-router-dom";
import ResumeMenu from "./ResumeMenu";
import "./ResumeCard.css";

const ResumeCard = ({
  resume,
  onDelete,
  onRename,
  onDuplicate,
  onDownload,
}) => {
  const navigate = useNavigate();

  const formatRelativeTime = (date) => {
    const now = new Date();
    const updated = new Date(date);

    const diff = Math.floor((now - updated) / 1000);

    if (diff < 60) return "Just now";

    if (diff < 3600)
      return `${Math.floor(diff / 60)} min ago`;

    if (diff < 86400)
      return `${Math.floor(diff / 3600)} hour ago`;

    if (diff < 604800)
      return `${Math.floor(diff / 86400)} day ago`;

    return updated.toLocaleDateString();
  };

  return (
    <div className="resume-card">

      <div className="resume-top">

        <div>

          <h3>{resume.title}</h3>

          <span className={`status ${resume.status}`}>
            {resume.status}
          </span>

        </div>

        <ResumeMenu
          onOpen={() => navigate(`/builder/${resume._id}`)}
          onRename={() => onRename(resume)}
          onDuplicate={() => onDuplicate(resume)}
          onDownload={() => onDownload(resume)}
          onDelete={() => onDelete(resume._id)}
        />

      </div>

      <div className="resume-info">

        <p>
          <strong>Template:</strong> {resume.template}
        </p>

        <p>
          <strong>Updated:</strong>{" "}
          {formatRelativeTime(resume.updatedAt)}
        </p>

        <p>
          <strong>Created:</strong>{" "}
          {new Date(resume.createdAt).toLocaleDateString()}
        </p>

      </div>

      <button
        className="open-btn"
        onClick={() => navigate(`/builder/${resume._id}`)}
      >
        Open Resume
      </button>

    </div>
  );
};

export default ResumeCard;