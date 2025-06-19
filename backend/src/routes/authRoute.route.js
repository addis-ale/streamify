import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";

const authRoute = Router();
authRoute.get("/", signUp);
export default authRoute;
