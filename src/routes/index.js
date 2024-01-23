import express from "express";
import IndexController from "../controller/index.js";
import TimeRoutes from "./TimerStamp.js";

const router = express.Router();
router.get("/", IndexController.homePage);
router.use("/timestamp", TimeRoutes);

export default router;
