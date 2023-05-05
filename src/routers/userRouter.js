import express from "express";

const usesrRouter = express.Router();


const handleEditUser = (req, res) => {
    res.send("Edit User");
}

usesrRouter.get("/edit", handleEditUser);

export default usesrRouter;