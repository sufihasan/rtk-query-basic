import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import SinglePost from "../pages/singlePost";
import AddPost from "../pages/addPost";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/blog/:id',
                element: <SinglePost></SinglePost>
            },
            {
                path: '/addPost',
                element: <AddPost />
            }
        ]
    },
]);