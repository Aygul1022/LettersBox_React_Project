const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const MAX_QUERY_LENGTH = 100;

export default async function handler(request, response) {
    response.setHeader("Cache-Control", "no-store");

    if (request.method !== "GET") {
        response.setHeader("Allow", "GET");
        return response.status(405).json({ error: "Method not allowed." });
    }

    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) {
        console.error("TMDB_API_KEY is not configured.");
        return response.status(500).json({ error: "Movie service is not configured." });
    }

    const queryParameter = request.query.q;
    if (Array.isArray(queryParameter)) {
        return response.status(400).json({ error: "Invalid search query." });
    }

    const query = queryParameter?.trim();
    if (queryParameter !== undefined && (!query || query.length > MAX_QUERY_LENGTH)) {
        return response.status(400).json({ error: "Search query must be between 1 and 100 characters." });
    }

    const endpoint = query ? "/search/movie" : "/movie/popular";
    const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
    url.searchParams.set("api_key", apiKey);
    if (query) {
        url.searchParams.set("query", query);
    }

    try {
        const tmdbResponse = await fetch(url, {
            headers: { Accept: "application/json" },
        });
        if (!tmdbResponse.ok) {
            console.error(`TMDB request failed with status ${tmdbResponse.status}.`);
            return response.status(502).json({ error: "Movie service request failed." });
        }

        const data = await tmdbResponse.json();
        if (!Array.isArray(data.results)) {
            console.error("TMDB response did not include movie results.");
            return response.status(502).json({ error: "Invalid response from movie service." });
        }

        response.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
        return response.status(200).json({ results: data.results });
    } catch (error) {
        console.error("Unable to reach TMDB.", error);
        return response.status(502).json({ error: "Unable to reach movie service." });
    }
}
