import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home/Home";
import Todo from "../Pages/Todo/Todo";
import Touch from "../Pages/Touch/Touch";




export const router = createBrowserRouter([
      
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Todo></Todo>
            },
            {
                path: '/',
                element: <Touch></Touch>
            },
    ] 
    }

]) 



