import { useEffect, useState } from "react";
import "./RenameModal.css";

const RenameModal = ({
  isOpen,
  currentTitle,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(currentTitle || "");
  }, [currentTitle]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="rename-modal">

        <h2>Rename Resume</h2>

        <p>Give your resume a meaningful name.</p>

        <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Resume name"
        />

        <div className="modal-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={()=>onSave(title)}
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default RenameModal;