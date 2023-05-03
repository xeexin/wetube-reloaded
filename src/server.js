//const express = require("express");
import express from "express";

const app = express(); 
const PORT = 4000;

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url ; 
    if( url === "/protected" ){
        return res.send("<h1>Not Allowed</h1>");
    };
    console.log("Allowed, you may continue");
    next();
};

const handleHome = (request, response) => {
    //return response.send("<h1>I still love you</h1>");
    return response.send("I love Middlewares");
};

const handleProtected = (req, res) => {
    return res.sned("Welcome to the private lounge")
}

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);


const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 👻`);
app.listen(4000, handleListening);