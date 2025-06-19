import express, { Router } from "express";
import authRoute from "./authRoute.route.js";
const rootRoute = Router();
rootRoute.use("/auth", authRoute);
export default rootRoute;
