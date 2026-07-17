import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/404.webp";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-card">

        <img
          src={NotFoundImg}
          alt="404 Not Found"
          className="not-found-image"
        />

        <h1>404</h1>

        <h2>Oops!</h2>

        <p>
          This page didn't qualify for the job.
        </p>

        <p className="sub-text">
          Let's get you back to building your resume.
        </p>

        <Link to="/dashboard" className="back-btn">
          ← Back to Dashboard
        </Link>

      </div>
    </div>
  );
};

export default NotFound;