import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { DesktopBreakpoint } from '../../shared/data/Values';

export const useChangeScreenSize = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const isDesktop = useMediaQuery(DesktopBreakpoint);

    const handleOpenMenu = () => {
        setOpenMenu((prev) => {
            return !prev;
        })
    };

    useEffect(() => {
        if (isDesktop && openMenu) {
            setOpenMenu(false)
        }
    }, [isDesktop, openMenu])

    return {
        openMenu,
        handleOpenMenu
    }
}
