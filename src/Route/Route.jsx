import {
    createBrowserRouter, useParams,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import SelectedClasses from "../components/Dashboard/SelectedClasses/SelectedClasses";
import EnrollClasses from "../components/Dashboard/EnrollClasses/EnrollClasses";
import AllUser from "../components/Dashboard/AllUsers/AllUser";
import ManageClasses from "../components/Dashboard/ManageClasses/ManageClasses";
import Feedback from "../components/Dashboard/Feedback/Feedback";
import AddAClass from "../components/Dashboard/AddAClass/AddAClass";
import MyClasses from "../components/Dashboard/MyClasses/MyClasses";

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
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'feedback/:id',
                element: <Feedback></Feedback>,
                loader: ({params}) => fetch(`http://localhost:5000/dashboard/feedback/${params.id}`)
            },
            {
                path: 'addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            }
        ]
    }
]);