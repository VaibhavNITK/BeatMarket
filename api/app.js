import express from "express";
import artistRouter from "./routes/artist.js";
// import albumRouter from "./routes/album.js";
// import songsRouter from "./routes/songs.js";
// import producerRouter from "./routes/producer.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

config({
  path: "./data/config.env",
});

export const app = express();



// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000', methods: ["GET", "POST", "PUT", "DELETE"] }));



// Using routes
app.use("/api/v1/artist", artistRouter);
// app.use("/api/v1/album", albumRouter);
// app.use("/api/v1/producer", producerRouter);
// app.use("/api/v1/songs", songsRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
