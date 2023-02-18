const express = require("express");
const router = express.Router();

const doctorRoutes = require("./doctorRoutes");
const patientRoutes = require("./patientRoutes");
const reportRoutes = require("./reportRoutes");

// separate route files for managing doctors, patients and reports
router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);
router.use("/reports", reportRoutes);

module.exports = router;
