//const express = require("express");
import express from "express";

const app = express(); 
const PORT = 4000;


const handleHome = (request, response) => {
    return response.send("<h1>I still love you</h1>");
 
    //return response.end();
};

const handleLogin = (req, res) => {
    return res.send ({message: "Login here"});
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 👻`);
app.listen(4000, handleListening);

// =app.listen(4000, () => console.log("Server Listening on port 4000👻");