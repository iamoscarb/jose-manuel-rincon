import { CustomTitle } from "../../shared/component/CustomTitle"
import { TheaterTitle } from "../../shared/data/PageTitles"

export const TheaterPage = () => {
    const title = TheaterTitle;

    return (
        <>
            <CustomTitle title={title} />
        </>
    )
}
