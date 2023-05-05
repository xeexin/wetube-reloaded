//const express = require("express");
import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => {
    res.send("Home");
}
globalRouter.get("/", handleHome);


const usesrRouter = express.Router();
const handleEditUser = (req, res) => {
    res.send("Edit User");
}
usesrRouter.get("/edit", handleEditUser);


const videoRouther = express.Router();
const handleWatchVideo = (req, res) => {
    res.send("Watch Video");
}
videoRouther.get("/watch", handleWatchVideo);



app.use("/", globalRouter);
app.use("/users", usesrRouter);
app.use("/videos", videoRouther);

const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 👻`);
app.listen(4000, handleListening);