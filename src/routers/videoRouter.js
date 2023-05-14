import  express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouther = express.Router();

videoRouther.get("/:id(\\d+)", watch);
videoRouther.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouther;
