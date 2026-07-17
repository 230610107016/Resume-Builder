import "./DeleteModal.css";

const DeleteModal = ({
  isOpen,
  resumeTitle,
  onClose,
  onDelete,
}) => {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="delete-modal">

        <div className="delete-icon">
          🗑
        </div>

        <h2>Delete Resume</h2>

        <p>
          Are you sure you want to delete
        </p>

        <h3>"{resumeTitle}"</h3>

        <small>
          This action cannot be undone.
        </small>

        <div className="delete-actions">

          <button
            className="cancel-delete"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-delete"
            onClick={onDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;