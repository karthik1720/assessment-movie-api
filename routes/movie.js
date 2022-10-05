import express from "express";
import { addMovie, deleteMovie, updateMovie, getMovie } from "../crud/movie.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/add", verifyToken, addMovie);
router.delete("/delete/:name", verifyToken, deleteMovie);
router.put("/update/:name", verifyToken, updateMovie);
router.get("/get/:name", getMovie);

export default router;
