import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyTask from "../Pages/MyTask/MyTask";
import Register from "../Pages/Register/Register";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/register', element: <Register></Register> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/addTask', element: <AddTask></AddTask> },
            { path: '/myTask', element: <MyTask></MyTask> },
            { path: '/completedTask', element: <CompletedTask></CompletedTask> }
        ]
    },
]);

export default routes;