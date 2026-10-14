import { useState } from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import useScrollTrigger from "@mui/material/useScrollTrigger"

export const useHideMenu = () => {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 250,
    });

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (current > previous && current > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return {
        hidden,
        scrolled
    }
}
