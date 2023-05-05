import express from "express";
import { edit, remove } from "../controllers/userController";

const usesrRouter = express.Router();


usesrRouter.get("/edit", edit);
usesrRouter.get("/remove", remove);


export default usesrRouter;