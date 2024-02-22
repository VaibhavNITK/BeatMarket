const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


const artistRoutes = require("./routes/artistRoutes");


dotenv.config();
connectDB();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Backend running");
});


// **** ARTIST-ROUTES ****
app.use("/api/artist", artistRoutes);



const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));


