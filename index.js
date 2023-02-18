const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000;
const db = require("./config/mongoose");
const indexRoutes = require("./routes/index");

const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use("/", indexRoutes);

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
