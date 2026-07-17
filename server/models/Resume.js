import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "",
    },

    fullName: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },
  },
  {
    _id: false,
  }
);

const educationSchema = new mongoose.Schema(
  {
    college: String,
    degree: String,
    branch: String,
    cgpa: String,
    startYear: String,
    endYear: String,
  },
  { _id: false }
);

const experienceSchema = new mongoose.Schema(
  {
    jobTitle: String,
    company: String,
    location: String,
    employmentType: String,
    startDate: String,
    endDate: String,
    current: Boolean,
    description: String,
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    description: String,
    github: String,
    liveDemo: String,
    technologies: String,
  },
  { _id: false }
);

const skillSchema = new mongoose.Schema(
  {
    name: String,
  },
  { _id: false }
);

const certificationSchema = new mongoose.Schema(
  {
    certificateName: String,
    organization: String,
    issueDate: String,
    credentialUrl: String,
  },
  { _id: false }
);

const languageSchema = new mongoose.Schema(
  {
    language: String,
    level: String,
  },
  { _id: false }
);

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "Untitled Resume",
    },

    template: {
      type: String,
      default: "modern",
    },

    status: {
      type: String,
      enum: ["draft", "completed"],
      default: "draft",
    },

    personalInfo: personalInfoSchema,

    education: [educationSchema],

    experience: [experienceSchema],

    projects: [projectSchema],

    skills: [skillSchema],

    certifications: [certificationSchema],

    languages: [languageSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);