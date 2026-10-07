import { Outlet } from "react-router"
import { Footer } from "../../shared/component/Footer"
import { HeaderMenu } from "../../shared/component/HeaderMenu"

export const JoseManuelLayout = () => {
    return (
        <>
            <HeaderMenu />
            <Outlet />
            <Footer />
        </>
    )
}
