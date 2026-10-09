import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export const useChangeScreenSize = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
