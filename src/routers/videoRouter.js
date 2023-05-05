import  express from "express";

const videoRouther = express.Router();

const handleWatchVideo = (req, res) => {
    res.send("Watch Video");
}

videoRouther.get("/watch", handleWatchVideo);

export default videoRouther;
