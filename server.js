const express = require("express");
const connectDB = require("./Db/db");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config();
// Connect to Database
connectDB();

// Initialize Middleware
app.use(express.json({ strict: false }));
const corsOptions = {
  origin: "https://doctor-alzheimer.onrender.com",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
//app.use(cors);

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use(cors());

//app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.static(path.join(__dirname, "client/build/")));

//app.get("*", (req, res) => {
//res.sendFile(path.join(__dirname, "/client/build", "index.html"));
//});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
  //res.sendFile("index.html");
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, () => console.log(`Server started on PORT ${PORT}`));
