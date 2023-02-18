# Hospital API

### Description

The Hospital API is a RESTful API that provides CRUD (Create, Read, Update, and Delete) operations for managing doctors, patients, and reports. It is built using Node.js and Express.js, and uses MongoDB Atlas as the database.

### Installation

1. Clone the repository to your local machine using `git clone`.

2. Run `npm install` to install the necessary dependencies.

### Usage

To start the server, run npm start. This will start the server at http://localhost:8000.

### API Endpoints

The following API endpoints are available:

#### Doctors

👉 POST :- /doctors/register: Registers a new doctor. Requires a `username` and `password` in the request body.

👉 POST :- /doctors/login: Logs in a doctor. Requires a `username` and `password` in the request body.

#### Patients

👉 POST :- /patients/register: Registers a new patient. Requires a `name` and `phone` in the request body.

👉 POST :- /patients/:id/create_report: Creates a new medical report for a patient with the given `id`. Requires a status in the request body.

👉 GET :- /patients/:id/all_reports: Returns all the medical reports of a patient with the given `id`.
Reports
👉 GET :- /reports/:status: Returns all the medical reports with the given `status`.

### Authentication

Authentication is required for creating a patient report and getting a patient's reports. To authenticate, send a JSON Web Token (JWT) in the Authorization header of the request. The JWT is obtained by logging in as a doctor.

### Environment Variables

The following environment variables are required:

- MONGODB_URI: The URI for connecting to the MongoDB database.
- JWT_SECRET: The secret key for JWT.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- cors
- dotenv
- jsonwebtoken
- nodemon (development dependency)

### License

This project is licensed under the ISC License.
