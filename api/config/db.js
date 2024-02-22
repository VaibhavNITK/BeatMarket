const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = () => {
    mongoose
      .connect("mongodb+srv://vaibagar:vaibagar@cluster0.grqe6ec.mongodb.net/?retryWrites=true&w=majority", {
        dbName: "beatmarket",
      })
      .then((conn) => console.log(`Database Connected with ${conn.connection.host}`.rainbow.underline))
      .catch((err) => console.error(`Error: ${err.message}`.red.bold))
  };

module.exports = connectDB;