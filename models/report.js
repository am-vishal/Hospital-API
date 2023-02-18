const mongoose = require("mongoose");

const statusEnum = ["Negative", "Traveled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"];

const reportSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    status: { type: String, required: true, enum: statusEnum },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
  },
);

module.exports = mongoose.model("Report", reportSchema);
