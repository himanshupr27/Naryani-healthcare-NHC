import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Bookappoint from "./Bookappoint"
import About from "./About";
import Services from "./Services";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
import Space from "./Space"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function Apps() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <><NavBar/><Space/><About/><Footer/></>,
    },
    {
      path: "/contact",
      element: <><NavBar/><Space/><Contacts/><Footer/></>,
    },
    {
      path: "/services",
      element:<><NavBar/><Services/><Footer/></>,
    },
    {
      path: "/login",
      element: <><NavBar/><Login/><Footer/></>,
    },
    {
      path: "/signup",
      element: <><NavBar/><Signup/><Footer/></>,
    },
    {
      path: "/bookappointment",
      element: <><NavBar/><Bookappoint/><Footer/></>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default Apps;
