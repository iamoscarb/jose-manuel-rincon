import { CustomTitle } from "../../shared/component/CustomTitle"
import { TheaterTitle } from "../../shared/data/PageTitles"

export const TheaterPage = () => {
    let title = TheaterTitle;

    return (
        <>
            <CustomTitle title={title} />
        </>
    )
}
