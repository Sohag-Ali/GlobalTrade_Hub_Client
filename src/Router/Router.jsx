import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Components/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Products from '../Pages/Products';
import Profile from '../Pages/Profile';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from '../Pages/UpdateProfile';
import MyImports from '../Pages/MyImports';
import MyExports from '../Pages/MyExports';
import AddExports from '../Pages/AddExports';
import ProductDetails from '../Pages/ProductDetails';
import Eorror from '../Pages/Eorror';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/profile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "/update-profile",
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
          </PrivateRoute>
      },
      {
        path: "/myExports",
        element: <PrivateRoute>
          <MyExports></MyExports>
        </PrivateRoute>
      },
      {
        path: "/myImports",
        element: <PrivateRoute>
          <MyImports></MyImports>
        </PrivateRoute>
      },
      {
        path: "/addProduct",
        element: <PrivateRoute>
          <AddExports></AddExports>
        </PrivateRoute>
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails,
       
      },
      {
        path: "*",
        element: <Eorror></Eorror>
      }
    ]
  },
]);

// export default router;