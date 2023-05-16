import  express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouther = express.Router();

videoRouther.get("/:id([0-9a-f]{24})", watch);
videoRouther.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouther.route("/upload").get(getUpload).post(postUpload);

export default videoRouther;
