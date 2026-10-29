import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "motion/react"
import { CustomLogo } from "./CustomLogo"
import { useChangeScreenSize } from "../../joseManuelRincon/hooks/useChangeScreenSize"
import { useHideMenu } from "../../joseManuelRincon/hooks/useHideMenu"

const navItems = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Cine y TV", href: "/#cine-tv" },
    { label: "Teatro", href: "/#teatro" },
    { label: "Audio y Video", href: "/#audio-video" },
    { label: "Medios", href: "/#medios" },
    { label: "Contacto", href: "/#contacto" },
]

export const HeaderMenu = () => {
    const { hidden, scrolled } = useHideMenu();
    const { openMenu, handleOpenMenu } = useChangeScreenSize();

    return (
        <>
            <AppBar
                component={motion.header}
                animate={{
                    y: hidden ? - 140 : 0,
                    opacity: hidden ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                elevation={0}
                sx={{ background: 'transparent' }}
                className={[
                    "transition-all! duration-300! ease-in-out!",
                    scrolled
                        ? "bg-primary!"
                        : "bg-transparent! text-white! shadow-none!",
                ].join(" ")}
            >
                <Toolbar className="mx-auto w-full px-4">
                    {/* Logo / marca */}
                    <Box className="flex flex-1 items-center gap-2">
                        <CustomLogo className="text-3xl! md:text-2xl! " />
                    </Box>


                    {/* Enlaces de escritorio */}
                    <Box className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                href={item.href}
                                color="inherit"
                                className="font-medium! capitalize dm-sans-font!"
                                sx={{
                                    position: 'relative',
                                    overflow: 'visible',
                                    transition: 'color 0.25s ease',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -2,
                                        backgroundColor: '#ec4899', // bg-pink-500
                                        transform: 'skewY(0deg) scale(0.85)',
                                        opacity: 0,
                                        zIndex: 0,
                                        transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#ffffff',
                                        '&::before': {
                                            opacity: 1,
                                            transform: 'skewY(-3deg) scale(1)',
                                        },
                                    },
                                }}
                            >
                                <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                            </Button>
                        ))}
                    </Box>

                    {/* Botón de menú móvil */}
                    <IconButton
                        color="inherit"
                        aria-label="Abrir menú"
                        edge="end"
                        onClick={handleOpenMenu}
                        className="md:hidden! text-2xl"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer para móvil */}
            <Drawer
                anchor="right"
                open={openMenu}
                onClose={handleOpenMenu}
                slotProps={{ paper: { className: "w-3/4! bg-primary! text-white!" } }}
            >
                <Box className="flex justify-between items-center gap-2 px-5 py-3">
                    <CustomLogo className="text-2xl!" />

                    <IconButton
                        color="inherit"
                        aria-label="Cerrar menú"
                        edge="end"
                        onClick={handleOpenMenu}
                        className="md:hidden! text-xl"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding className="px-3">
                            <ListItemButton
                                component="a"
                                href={item.href}
                                onClick={handleOpenMenu}
                            >
                                <ListItemText primary={item.label}
                                    className="uppercase dm-sans-font" />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
