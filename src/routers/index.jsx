import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Index";
import About from "../pages/About";
import Post from "../pages/blogs/_id";
import Blog from "../pages/blogs";

import { posts, postById } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: posts,
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: postById,
            }
        ]
    },
]);