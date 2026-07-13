import "./ResumePreview.css";

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview">

      <div className="resume-paper">

        <h1>{data.fullName || "Your Name"}</h1>

        <h3>{data.title || "Professional Title"}</h3>

        <p>{data.email}</p>

        <p>{data.phone}</p>

        <p>{data.location}</p>

        <br/>

        <h2>Professional Summary</h2>

        <p>{data.summary}</p>

      </div>

    </div>
  );
};

export default ResumePreview;