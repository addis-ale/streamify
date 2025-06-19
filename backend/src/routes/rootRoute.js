import express, { Router } from "express";
import authRoute from "./authRoute.js";
const rootRoute = Router();
rootRoute.use("/", authRoute);
export default rootRoute;
