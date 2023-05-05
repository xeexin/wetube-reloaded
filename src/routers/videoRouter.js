import  express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouther = express.Router();

videoRouther.get("/upload", upload);
videoRouther.get("/:id(\\d+)", see);
videoRouther.get("/:id(\\d+)/edit", edit);
videoRouther.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouther;
