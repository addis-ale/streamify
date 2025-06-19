import { Router } from "express";

const authRoute = Router();
authRoute.get("/", (req, res) => {
  res.json("hello");
});
export default authRoute;
