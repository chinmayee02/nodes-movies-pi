import axios from "axios";
import { Movie } from "../types/movie"; // Import Movie type

export const fetchMovies = async (year: string, page: number): Promise<Movie[]> => {
    const baseUrl = "https://api.themoviedb.org/3/discover/movie";
    const apiKey = process.env.TMDB_API_KEY;
    const url = `${baseUrl}?language=en-US&primary_release_year=${year}&sort_by=popularity.desc&page=${page}`;
    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${apiKey}` },
        });
        return response.data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            editors: [], // Initialize editors as an empty array
        }));
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("Failed to fetch movies.");
    }
};
