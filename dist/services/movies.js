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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchMovies = (year, page) => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = "https://api.themoviedb.org/3/discover/movie";
    const apiKey = process.env.TMDB_API_KEY;
    const url = `${baseUrl}?language=en-US&primary_release_year=${year}&sort_by=popularity.desc&page=${page}`;
    try {
        const response = yield axios_1.default.get(url, {
            headers: { Authorization: `Bearer ${apiKey}` },
        });
        return response.data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            editors: [], // Initialize editors as an empty array
        }));
    }
    catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("Failed to fetch movies.");
    }
});
exports.fetchMovies = fetchMovies;
