import express from "express";
import dotenv from "dotenv";
import rootRoute from "./routes/rootRoute.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use("/api", rootRoute);
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
