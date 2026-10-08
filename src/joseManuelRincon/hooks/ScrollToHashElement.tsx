import { useEffect } from "react";
import { useLocation } from "react-router"

export const ScrollToHashElement = () => {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [hash])


    return null;
}
