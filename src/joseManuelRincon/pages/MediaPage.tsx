import { MediaTitle } from '../../shared/data/PageTitles'
import { CustomTitle } from '../../shared/component/CustomTitle';

export const MediaPage = () => {
    let title = MediaTitle;
    return (
        <>
            <CustomTitle title={title} />
        </>
    )
}
