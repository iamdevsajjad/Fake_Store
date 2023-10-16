import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import "./index.css";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Layout from "./Shared/Navbar/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/login",
        element:<Login/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
