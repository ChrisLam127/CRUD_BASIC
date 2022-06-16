require("dotenv").config();
const express = require("express");

const app = express();
const connectDB = require("./config/db");
const router = require("./router/routes");

connectDB();

app.use(express.json());

app.use("/api/v1", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
