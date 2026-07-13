import express from "express";
import { createResume, getMyResumes, getResumeById, } from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", protect, getResumeById);
router.post("/", protect, createResume);
router.get("/", protect, getMyResumes);
export default router;

