import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import App from "../App";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path:"/about",
                element: <About />
            },
        ],
    }
]);

export default router;