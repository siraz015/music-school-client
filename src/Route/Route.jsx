import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import SelectedClasses from "../components/Dashboard/SelectedClasses/SelectedClasses";
import EnrollClasses from "../components/Dashboard/EnrollClasses/EnrollClasses";
import AllUser from "../components/Dashboard/AllUsers/AllUser";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'selectedclasses',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'enrollclasses',
                element: <EnrollClasses></EnrollClasses>
            },
            {
                path: 'allusers',
                element: <AllUser></AllUser>
            }
        ]
    }
]);