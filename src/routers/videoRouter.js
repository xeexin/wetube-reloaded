import  express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouther = express.Router();

videoRouther.get("/:id(\\d+)", watch);
videoRouther.get("/:id(\\d+)/edit", getEdit);
videoRouther.get("/:id(\\d+)/edit", postEdit);

export default videoRouther;
