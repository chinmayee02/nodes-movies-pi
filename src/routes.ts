import express from "express";
import { getMoviesWithEditors } from "./controllers/movies";

const router = express.Router();

router.get("/movies", getMoviesWithEditors);

export default router;