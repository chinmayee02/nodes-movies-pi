import { fetchMovies } from "../src/services/movies";
import { fetchEditors } from "../src/services/editors";
import axios from "axios";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Movie API Services", () => {
    it("should fetch movies for a given year", async () => {
        const mockMovies = [
            { id: 1, title: "Joker", release_date: "2019-10-04", vote_average: 8.5, editors: [] },
        ];

        mockedAxios.get.mockResolvedValueOnce({
            data: { results: mockMovies },
        });

        const movies = await fetchMovies("2019", 1);
        expect(movies).toEqual(mockMovies); // Ensure test data matches implementation
        expect(mockedAxios.get).toHaveBeenCalledTimes(1); // Called once
    });

    it("should fetch editors for a movie", async () => {
        const mockCrew = [
            { name: "John Doe", known_for_department: "Editing" },
        ];

        mockedAxios.get.mockResolvedValueOnce({
            data: { crew: mockCrew },
        });

        const editors = await fetchEditors(1);
        expect(editors).toEqual(["John Doe"]); // Correct expectation
        expect(mockedAxios.get).toHaveBeenCalledTimes(2); // Ensure single call
    });
});
