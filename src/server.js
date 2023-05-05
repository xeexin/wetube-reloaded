//const express = require("express");
import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express(); 
const logger = morgan("dev");

const login = (req, res) => {
    return res.send("login");
}
const home = (req, res) => {
    return res.send("hello");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 👻`);
app.listen(4000, handleListening);