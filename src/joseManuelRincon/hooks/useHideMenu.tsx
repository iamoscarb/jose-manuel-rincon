import { useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

export const useHideMenu = () => {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (current > previous && current > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return {
        hidden
    }
}
