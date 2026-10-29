import { useQuery } from "@tanstack/react-query"
import { getMoviesSeriesAction } from "../actions/get-movies-series.action"

export const useMoviesTV = () => {
    return useQuery({
        queryKey: ['moviesTv'],
        queryFn: () => getMoviesSeriesAction(),
        staleTime: 1000 * 60 * 5,
        retry: false
    })
}