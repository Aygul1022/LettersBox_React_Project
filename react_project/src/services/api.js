const fetchMovies = async (endpoint, query) => {
    let url;
    if (import.meta.env.DEV) {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        if (!apiKey) {
            throw new Error("Missing VITE_TMDB_API_KEY. Add it to your .env.local file.");
        }

        url = new URL(`https://api.themoviedb.org/3${endpoint}`);
        url.searchParams.set("api_key", apiKey);
        if (query !== undefined) {
            url.searchParams.set("query", query);
        }
    } else {
        url = new URL("/api/movies", window.location.origin);
        if (query !== undefined) {
            url.searchParams.set("q", query);
        }
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Movie request failed (${response.status}).`);
    }

    const data = await response.json();
    return data.results;
};

export const getPopularMovies = () => fetchMovies("/movie/popular");

export const searchMovies = (query) => fetchMovies("/search/movie", query);