import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import Resume from "../models/Resume.js";

export const createResume = asyncHandler(async (req, res) => {
  const { title, template } = req.body;

  if (!title) {
    throw new ApiError(400, "Resume title is required.");
  }

  const resume = await Resume.create({
    user: req.user._id,
    title,
    template: template || "modern",
  });

  return res
    .status(201)
    .json(new ApiResponse(201, resume, "Resume created successfully."));
});

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

export const getResumeById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const resume = await Resume.findOne({
    _id: id,
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