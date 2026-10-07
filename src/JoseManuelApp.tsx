import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

export const JoseManuelApp = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}
