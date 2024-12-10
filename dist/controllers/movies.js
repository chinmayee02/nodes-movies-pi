"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoviesWithEditors = void 0;
const movies_1 = require("../services/movies");
const editors_1 = require("../services/editors");
const getMoviesWithEditors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const year = req.query.year;
    const page = req.query.page || 1;
    if (!year || isNaN(year)) {
        return res.status(400).json({ error: "Invalid year provided." });
    }
    try {
        const movies = yield (0, movies_1.fetchMovies)(year, page); // Explicitly type movies
        const moviesWithEditors = yield Promise.all(movies.map((movie) => __awaiter(void 0, void 0, void 0, function* () {
            return (Object.assign(Object.assign({}, movie), { editors: yield (0, editors_1.fetchEditors)(movie.id) }));
        })));
        res.json(moviesWithEditors);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch movies." });
    }
});
exports.getMoviesWithEditors = getMoviesWithEditors;
/*import { fetchMovies } from "../services/movies";
import { fetchEditors } from "../services/editors";
import { Request, Response } from "express";

export const getMoviesWithEditors = async (req: Request, res: Response) => {
    const year = req.query.year as string;
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;

    if (!year || isNaN(Number(year))) {
        return res.status(400).json({ error: "Invalid year provided. Year must be in YYYY format." });
    }

    try {
        const movies = await fetchMovies(year, page);

        // Add editors to each movie
        const moviesWithEditors = await Promise.all(
            movies.map(async (movie) => {
                const editors = await fetchEditors(movie.id); // Fetch editors for each movie
                return { ...movie, editors }; // Include editors in the response
            })
        );

        res.status(200).json(moviesWithEditors);
    } catch (error) {
        console.error("Error in fetching movies:", error);
        res.status(500).json({ error: "Failed to fetch movies. Please try again later." });
    }
};*/
