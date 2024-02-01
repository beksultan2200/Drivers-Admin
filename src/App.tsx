import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
// import Register from "./pages/register";
import SignIn from "./pages/signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //     path: "/register",
    //     element: <Register />,
    // },
    {
        path: "/signin",
        element: <SignIn />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
