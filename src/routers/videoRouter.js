import  express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouther = express.Router();

videoRouther.get("/upload", upload);
videoRouther.get("/:id", see);
videoRouther.get("/:id/edit", edit);
videoRouther.get("/:id/delete", deleteVideo);

export default videoRouther;
