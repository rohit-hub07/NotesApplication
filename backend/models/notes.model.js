import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ["User"],
    },
    tenant: {
      type: String,
      ref: "Tenant",
    },
  },
  { timestamps: true }
);
