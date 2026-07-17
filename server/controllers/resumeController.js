import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Resume from "../models/Resume.js";

/**
 * Create Resume
 */
export const createResume = asyncHandler(async (req, res) => {
  const resume = await Resume.create({
    user: req.user._id,
    title: req.body.title || "Untitled Resume",
    template: req.body.template || "modern",
    status: "draft",

    personalInfo: {
      profileImage: "",
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
      summary: "",
    },

    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: [],
    languages: [],
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      resume,
      "Resume created successfully."
    )
  );
});

/**
 * Get All Resumes of Logged-in User
 */
export const getMyResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({
    user: req.user._id,
  }).sort({
    updatedAt: -1,
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      resumes,
      "Resumes fetched successfully."
    )
  );
});

/**
 * Get Resume By ID
 */
export const getResumeById = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      resume,
      "Resume fetched successfully."
    )
  );
});

/**
 * Update Resume
 */
export const updateResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  resume.title = req.body.title ?? resume.title;
  resume.template = req.body.template ?? resume.template;
  resume.status = req.body.status ?? resume.status;

  resume.personalInfo =
    req.body.personalInfo ?? resume.personalInfo;

  resume.education =
    req.body.education ?? resume.education;

  resume.experience =
    req.body.experience ?? resume.experience;

  resume.projects =
    req.body.projects ?? resume.projects;

  resume.skills =
    req.body.skills ?? resume.skills;

  resume.certifications =
    req.body.certifications ?? resume.certifications;

  resume.languages =
    req.body.languages ?? resume.languages;

  await resume.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      resume,
      "Resume updated successfully."
    )
  );
});

/**
 * Delete Resume
 */
export const deleteResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  await Resume.findByIdAndDelete(req.params.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Resume deleted successfully."
    )
  );
});

export const renameResume = asyncHandler(async (req, res) => {
  const { title } = req.body;

  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    res.status(404);
    throw new Error("Resume not found");
  }

  if (resume.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  resume.title = title;

  await resume.save();

  res.status(200).json({
    success: true,
    data: resume,
  });
});

export const duplicateResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    res.status(404);
    throw new Error("Resume not found");
  }

  if (resume.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  // Remove "(Copy...)" if the selected resume is already a copy
  const baseTitle = resume.title.replace(
    /\s\(Copy(?:\s\d+)?\)$/i,
    ""
  );

  // Find all resumes with the same base title
  const existing = await Resume.find({
    user: req.user._id,
    title: {
      $regex: `^${baseTitle}( \\(Copy( \\d+)?\\))?$`,
      $options: "i",
    },
  });

  let highestCopy = 0;

  existing.forEach((item) => {
    if (item.title === baseTitle) return;

    const match = item.title.match(
      /\(Copy(?:\s(\d+))?\)$/i
    );

    if (match) {
      const number = match[1]
        ? parseInt(match[1])
        : 1;

      if (number > highestCopy) {
        highestCopy = number;
      }
    }
  });

  const newTitle =
    highestCopy === 0
      ? `${baseTitle} (Copy)`
      : `${baseTitle} (Copy ${highestCopy + 1})`;

  const copy = await Resume.create({
    user: resume.user,

    title: newTitle,

    template: resume.template,

    status: "draft",

    personal: structuredClone(resume.personal),

    education: structuredClone(resume.education),

    experience: structuredClone(resume.experience),

    projects: structuredClone(resume.projects),

    skills: structuredClone(resume.skills),

    certifications: structuredClone(
      resume.certifications
    ),

    languages: structuredClone(resume.languages),
  });

  res.status(201).json({
    success: true,
    data: copy,
  });
});