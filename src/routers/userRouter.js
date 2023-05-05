import express from "express";
import { see, remove, logout, edit } from "../controllers/userController";

const usesrRouter = express.Router();


usesrRouter.get("/remove", remove);
usesrRouter.get("/logout", logout);
usesrRouter.get("/edit", edit);
usesrRouter.get(":id", see);


export default usesrRouter;