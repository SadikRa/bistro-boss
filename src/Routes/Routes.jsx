import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Main/Layout/Dashbord";
import MyCart from "../pages/Deshbord/MyCart/MyCart";
import AllUsers from "../pages/Deshbord/AllUsers/AllUsers";
import AddItem from "../pages/Deshbord/AddItem/AddItem";
import ManageItems from "../pages/Deshbord/ManageItems/ManageItems";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],
  },
  {
    path: '/dashbord',
    element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItem',
        element: <AddItem></AddItem>
      },
      {
        path: 'manageItem',
        element: <ManageItems></ManageItems>,
      }
    ]
  }
]);

export default router;
