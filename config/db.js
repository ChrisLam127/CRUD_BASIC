const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log("DB Connected Successfully..."))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
