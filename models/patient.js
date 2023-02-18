const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: false,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
