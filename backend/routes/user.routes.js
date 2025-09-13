import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/isAuthnticated.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/logout",isAuthenticated, logoutController);

export default userRouter;
