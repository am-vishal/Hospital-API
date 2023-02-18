const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Doctor = require("../models/doctor");

// Defines a function for handling the registration of a new doctor with a unique username and hashed password.
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    let doctor = await Doctor.findOne({ username });
    if (doctor) {
      return res.status(400).send({ error: `Doctor ${doctor.username} is already exists` });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    doctor = new Doctor({ username, password: hashedPassword });
    console.log(username, hashedPassword);
    await doctor.save();
    res.status(201).send({ message: `Doctor ${doctor.username} is registered` });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Defines a function for handling the login of an existing doctor by verifying their credentials and returning a JWT token.
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });
    if (!doctor) {
      return res.status(401).send({ error: "Invalid Username or Password" });
    }
    const passwordMatch = await bcrypt.compare(password, doctor.password);
    if (!passwordMatch) {
      return res.status(401).send({ error: "Invalid Username or Password" });
    }
    const token = jwt.sign({ doctorId: doctor._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
