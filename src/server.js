//const express = require("express");
import "./db.js";
import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import usesrRouter from "./routers/userRouter";
import videoRouther from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", usesrRouter);
app.use("/videos", videoRouther);

const handleListening = () => console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
app.listen(4000, handleListening);