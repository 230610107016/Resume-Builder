import "./PersonalInfoForm.css";

const PersonalInfoForm = ({ data, onChange }) => {
  return (
    <div className="personal-form">

      <h2>Personal Information</h2>

      <div className="form-group">
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          value={data.fullName}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Professional Title</label>

        <input
          type="text"
          name="title"
          value={data.title}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>

        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Location</label>

        <input
          type="text"
          name="location"
          value={data.location}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>LinkedIn</label>

        <input
          type="text"
          name="linkedin"
          value={data.linkedin}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>GitHub</label>

        <input
          type="text"
          name="github"
          value={data.github}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Professional Summary</label>

        <textarea
          rows="5"
          name="summary"
          value={data.summary}
          onChange={onChange}
        />
      </div>

    </div>
  );
};

export default PersonalInfoForm;