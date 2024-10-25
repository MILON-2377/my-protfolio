import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import App from "../App";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <App />
            },
        ],
    }
]);

export default router;