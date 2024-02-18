import express from "express";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import companyRouter from "./routes/company.js";
import pocRouter from "./routes/poc.js";
import linkRouter from "./routes/link.js";
import skillRouter from "./routes/skills.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import { isAuthenticated } from "./middlewares/auth.js";
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
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/poc", pocRouter);
app.use("/api/v1/link", linkRouter);
app.use("/api/v1/skills", skillRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
