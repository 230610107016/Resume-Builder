import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FiEdit2,
  FiTrash2,
  FiDownload,
  FiCopy,
  FiFolder,
} from "react-icons/fi";

import "./ResumeMenu.css";

const ResumeMenu = ({
  onOpen,
  onRename,
  onDuplicate,
  onDownload,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleAction = (callback) => {
    setOpen(false);
    callback && callback();
  };

  return (
    <div
      className="resume-menu"
      ref={menuRef}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="resume-menu-btn"
        onClick={() => setOpen(!open)}
      >
        <BsThreeDotsVertical size={18} />
      </button>

      {open && (
        <div className="menu-dropdown">

          <button onClick={() => handleAction(onOpen)}>
            <FiFolder />
            <span>Open Resume</span>
          </button>

          <button onClick={() => handleAction(onRename)}>
            <FiEdit2 />
            <span>Rename</span>
          </button>

          <button onClick={() => handleAction(onDuplicate)}>
            <FiCopy />
            <span>Duplicate</span>
          </button>

          <button onClick={() => handleAction(onDownload)}>
            <FiDownload />
            <span>Download PDF</span>
          </button>

          <hr />

          <button
            className="delete"
            onClick={() => handleAction(onDelete)}
          >
            <FiTrash2 />
            <span>Delete</span>
          </button>

        </div>
      )}
    </div>
  );
};

export default ResumeMenu;