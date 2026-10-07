import { useState } from "react"
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
import useScrollTrigger from "@mui/material/useScrollTrigger"
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Cine y TV", href: "#nosotros" },
    { label: "Teatro", href: "#servicios" },
    { label: "Audio y Video", href: "#galeria" },
    { label: "Medios", href: "#contacto" },
    { label: "Contacto", href: "#contacto" },

]

export const HeaderMenu = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    // Se activa cuando el usuario baja más de 60px de scroll.
    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
    })

    return (
        <>
            <AppBar
                elevation={0}
                className={[
                    "transition-all duration-300 ease-in-out",
                    scrolled
                        ? "bg-background/95! text-foreground! shadow-md backdrop-blur-md"
                        : "bg-transparent! text-white! shadow-none",
                ].join(" ")}
                sx={{ backgroundImage: "none" }}
            >
                <Toolbar className="mx-auto w-full px-4">
                    {/* Logo / marca */}
                    <Box className="flex flex-1 items-center gap-2">
                        <span className="font-sans text-lg font-bold tracking-tight">
                            José Manuel Rincón
                        </span>
                    </Box>

                    {/* Enlaces de escritorio */}
                    <Box className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                href={item.href}
                                color="inherit"
                                className="font-medium! capitalize"
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
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden!"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer para móvil */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                slotProps={{ paper: { className: "!w-64 !bg-background !text-foreground" } }}
            >
                <Box className="flex items-center gap-2 px-4 py-4">
                    <span className="text-lg font-bold">Altura</span>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                component="a"
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
