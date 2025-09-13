import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dbConnection } from "./utils/db.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.get("/health", (req, res) => {
  res.send("Working");
})

app.use("/user", userRouter)

dbConnection();

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`)
}); 