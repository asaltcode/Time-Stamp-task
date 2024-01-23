import express from "express";
import AppRoutes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8088;

app.use("/", AppRoutes);

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
