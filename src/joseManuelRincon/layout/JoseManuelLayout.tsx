import { Outlet } from "react-router"
import { Footer } from "../../shared/component/Footer"
import { HeaderMenu } from "../../shared/component/HeaderMenu"
import { ScrollToHashElement } from "../hooks/ScrollToHashElement"

export const JoseManuelLayout = () => {
    return (
        <>
            <HeaderMenu />
            <ScrollToHashElement />
            <Outlet />
            <Footer />
        </>
    )
}
