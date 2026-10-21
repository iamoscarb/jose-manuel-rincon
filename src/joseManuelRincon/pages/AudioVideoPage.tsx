import { CustomTitle } from "../../shared/component/CustomTitle";
import { AudioVideoTitle } from "../../shared/data/PageTitles"

export const AudioVideoPage = () => {
    let title = AudioVideoTitle;
    return (
        <>
            <CustomTitle title={title} />
        </>
    )
}
