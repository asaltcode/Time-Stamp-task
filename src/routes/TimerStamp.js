import express from "express";
import TimeStampController from "../controller/TimeStamp.js";
const router = express.Router();
router.get("/", TimeStampController.getTime);

export default router;
