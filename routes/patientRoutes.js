const express = require("express");
const patientController = require("../controllers/patientController");
const authMiddleware = require("../middleware/auth");
const reportController = require("../controllers/reportController");

const router = express.Router();

// patients route
router.post("/register", authMiddleware, patientController.register);
router.post("/:id/create_report", authMiddleware, reportController.createReport);
router.get("/:id/all_reports", authMiddleware, reportController.getAllReports);

module.exports = router;
