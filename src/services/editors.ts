import axios from "axios";

export const fetchEditors = async (movieId: number) => {
    const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const apiKey = process.env.TMDB_API_KEY;

    try {
        const response = await axios.get(baseUrl, {
            headers: { Authorization: `Bearer ${apiKey}` },
        });
        const editors = response.data.crew.filter(
            (person: any) => person.known_for_department === "Editing"
        );
        return editors.map((editor: any) => editor.name);
    } catch (error) {
        console.error("Error fetching editors for movie ID ${movieId}:", error);
        return [];
    }
};
