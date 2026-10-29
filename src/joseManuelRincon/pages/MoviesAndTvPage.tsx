import { Carousel } from "../../shared/component/Carousel"
import { CustomTitle } from "../../shared/component/CustomTitle"
import { MoviesTVTitle } from "../../shared/data/PageTitles"
import { useMoviesTV } from "../hooks/useMoviesTV"

export const MoviesAndTvPage = () => {
    let title = MoviesTVTitle;
    const { data: mediaArray, isError } = useMoviesTV();

    const handlePhotoClick = (value?: any) => {
        console.log(value)
    }

    if (isError || !mediaArray) return;

    return (
        <>
            <CustomTitle title={title} />
            <Carousel photosArray={mediaArray} handlePhotoClick={handlePhotoClick} />
        </>
    )
}
