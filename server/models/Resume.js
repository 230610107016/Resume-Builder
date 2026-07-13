import mongoose from "mongoose";

/* ===========================
   Personal Information
=========================== */
const personalInfoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      default: "",
    },

    lastName: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    profession: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },

    postalCode: {
      type: String,
      default: "",
    },

    socialLinks: {
      linkedin: {
        type: String,
        default: "",
      },

      github: {
        type: String,
        default: "",
      },

      portfolio: {
        type: String,
        default: "",
      },

      leetcode: {
        type: String,
        default: "",
      },

      codechef: {
        type: String,
        default: "",
      },

      codeforces: {
        type: String,
        default: "",
      },

      hackerrank: {
        type: String,
        default: "",
      },

      behance: {
        type: String,
        default: "",
      },

      dribbble: {
        type: String,
        default: "",
      },

      youtube: {
        type: String,
        default: "",
      },

      other: [
        {
          platform: String,
          url: String,
        },
      ],
    },
  },
  {
    _id: false,
  }
);

/* ===========================
   Resume Schema
=========================== */

const resumeSchema = new mongoose.Schema(
  {
    // Owner
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Resume Metadata
    title: {
      type: String,
      required: true,
      trim: true,
    },

    template: {
      type: String,
      default: "modern",
    },

    status: {
      type: String,
      enum: ["draft", "completed", "archived"],
      default: "draft",
    },

    personalInfo: personalInfoSchema,
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;