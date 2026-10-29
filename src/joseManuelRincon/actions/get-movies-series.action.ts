import { MoviesTvData } from "../../shared/data/JoseManuelData"

const moviesData = MoviesTvData;

export const getMoviesSeriesAction = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    const movies = structuredClone(moviesData);

    if (!movies) {
        throw new Error("404 not found");
    }

    return movies;
}