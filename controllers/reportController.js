const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Report = require("../models/report");

exports.createReport = async (req, res) => {
  const { id } = req.params;
  const { status, createdBy } = req.body;
  try {
    const patient = await Patient.findById(id);
    const doctor = await Doctor.findById(createdBy);
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }
    if (!doctor) {
      return res.status(404).send({ message: "Doctor not found" });
    }
    const report = new Report({
      patient: patient._id,
      status,
      createdBy: doctor.username,
      createdOn: Date.now(),
    });
    await report.save();
    res.status(201).send({ report });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getAllReports = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }
    const reports = await Report.find({ patient: patient._id }).sort({ createdAt: "asc" });
    res.status(200).send({ reports });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getReportsByStatus = async (req, res) => {
  const { status } = req.params;
  Report.find({ status })
    .populate("patient", "name")
    .sort({ date: 1 })
    .then((reports) => {
      if (!reports) {
        return res.status(404).send({ message: "Reports not found" });
      }
      res.status(200).send({ reports });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};
