const jwt = require("jsonwebtoken");
require("dotenv").config();

// Verifies the JWT passed in the "JWT" header and attaches the decoded doctor ID to the req object,
module.exports = (req, res, next) => {
  try {
    const token = req.header("JWT");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.doctorId = decodedToken.doctorId;
    next();
  } catch (err) {
    res.status(401).send({ message: "Authentication failed" });
  }
};
