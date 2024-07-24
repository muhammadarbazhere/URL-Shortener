const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const urlRoutes = require("./routes/urlRoutes");

const app = express();
const port = 3000;

app.use(cors({ credentials: true, origin: true })); // Ensure all origins
app.use(cookieParser());
app.use(express.json());

app.use("/url", urlRoutes);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection successful");
  } catch (error) {
    console.log("Connection error", error);
  }
}
connectDB();

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
