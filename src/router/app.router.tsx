import { createBrowserRouter } from "react-router";
import { JoseManuelLayout } from "../joseManuelRincon/layout/JoseManuelLayout";
import { HomePage } from "../joseManuelRincon/pages/HomePage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <JoseManuelLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])