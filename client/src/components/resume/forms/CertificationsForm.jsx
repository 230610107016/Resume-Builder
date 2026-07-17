import { useState } from "react";
import "./CertificationsForm.css";

const initialState = {
  certificateName: "",
  organization: "",
  issueDate: "",
  credentialUrl: "",
};

const CertificationsForm = ({
  certifications,
  onAddCertification,
  onDeleteCertification,
}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.certificateName || !formData.organization) return;

    onAddCertification({
      id: Date.now(),
      ...formData,
    });

    setFormData(initialState);
  };

  return (
    <div className="certifications-form">

      <h2>Certifications</h2>

      <input
        name="certificateName"
        placeholder="Certificate Name"
        value={formData.certificateName}
        onChange={handleChange}
      />

      <input
        name="organization"
        placeholder="Issuing Organization"
        value={formData.organization}
        onChange={handleChange}
      />

      <input
        type="month"
        name="issueDate"
        value={formData.issueDate}
        onChange={handleChange}
      />

      <input
        name="credentialUrl"
        placeholder="Credential URL (Optional)"
        value={formData.credentialUrl}
        onChange={handleChange}
      />

      <button
        className="add-btn"
        onClick={handleSubmit}
      >
        + Add Certification
      </button>

      <div className="certificate-list">

        {certifications.map((item) => (
          <div
            className="certificate-card"
            key={item.id}
          >

            <div>

              <h4>{item.certificateName}</h4>

              <p>{item.organization}</p>

            </div>

            <button
              className="delete-btn"
              onClick={() =>
                onDeleteCertification(item.id)
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

export default CertificationsForm;