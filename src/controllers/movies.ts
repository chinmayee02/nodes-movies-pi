import { fetchMovies } from "../services/movies";
import { fetchEditors } from "../services/editors";
import { Movie } from "../types/movie"; // Import Movie type

export const getMoviesWithEditors = async (req: any, res: any) => {
    const year = req.query.year;
    const page = req.query.page || 1;

    if (!year || isNaN(year)) {
        return res.status(400).json({ error: "Invalid year provided." });
    }

    try {
        const movies: Movie[] = await fetchMovies(year, page); // Explicitly type movies
        const moviesWithEditors = await Promise.all(
            movies.map(async (movie: Movie) => ({
                ...movie,
                editors: await fetchEditors(movie.id),
            }))
        );
        res.json(moviesWithEditors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies." });
    }
};

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

