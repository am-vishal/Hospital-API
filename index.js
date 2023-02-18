const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 8000;
const db = require("./config/mongoose");
const indexRoutes = require("./routes/index");
const fs = require("fs");

const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use("/", indexRoutes);

// rendering index.html data
app.get("/", (_req, res) => {
  try {
    return res.sendFile(path.join(__dirname, "index.html"));
  } catch (err) {
    const errorMessage = "Error found in loading. Please try again later.";
    res.render("error", { errorMessage });
  }
});

app.use((_req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
