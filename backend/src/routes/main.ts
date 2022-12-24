import express, { Application } from "express";
import studentRoute from "./student";

const app: Application = express();

app.use("/api/student", studentRoute);

export default app;