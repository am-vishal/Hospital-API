const Patient = require("../models/patient");
const Report = require("../models/report");

exports.register = async (req, res) => {
  const { name, phone } = req.body;
  try {
    let patient = await Patient.findOne({ phone });
    if (!patient) {
      patient = new Patient({ name, phone });
      await patient.save();
      return res.json(patient);
    } else {
      res.status(201).send({ patient });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
