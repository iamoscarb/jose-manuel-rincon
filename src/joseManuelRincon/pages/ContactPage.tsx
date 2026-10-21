import { CustomTitle } from "../../shared/component/CustomTitle";
import { ContactTitle } from "../../shared/data/PageTitles"

export const ContactPage = () => {
    let title = ContactTitle;
    return (
        <>
            <CustomTitle title={title} />
        </>
    )
}
