import  express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouther = express.Router();


videoRouther.get("/watch", watch);
videoRouther.get("/edit", edit);

export default videoRouther;
