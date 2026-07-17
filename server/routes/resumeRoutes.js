import express from "express";
import {
  getMyResumes,
  getResumeById,
  createResume,
  updateResume,
  deleteResume,
  renameResume,
  duplicateResume,
} from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/:id", protect, updateResume);
router.delete("/:id", protect, deleteResume);
router.get("/:id", protect, getResumeById);
router.post("/", protect, createResume);
router.get("/", protect, getMyResumes);
router.patch("/:id/rename",protect,renameResume);
router.post("/:id/duplicate",protect,duplicateResume);
export default router;
