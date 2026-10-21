import { Carousel } from "../../shared/component/Carousel"
import { CustomTitle } from "../../shared/component/CustomTitle"
import { MoviesTvData } from "../../shared/data/JoseManuelData"
import { MoviesTVTitle } from "../../shared/data/PageTitles"

export const MoviesAndTvPage = () => {
    let title = MoviesTVTitle;
    const mediaArray = MoviesTvData;

    const handlePhotoClick = (value?: any) => {
        console.log(value)
    }

    return (
        <>
            <CustomTitle title={title} />
            <Carousel photosArray={mediaArray} handlePhotoClick={handlePhotoClick} />
        </>
    )
}
