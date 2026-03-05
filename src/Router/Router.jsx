import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Components/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

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
    ]
  },
]);

// export default router;