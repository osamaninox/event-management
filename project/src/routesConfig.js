// routesConfig.js
import React from "react";
import DashboardHome from "./views/dashboard/pages/Home";
import Home from "./views/front/pages/Home";
import About from "./views/front/pages/About";
import Contact from "./views/front/pages/Contact";
import Services from "./views/front/pages/Services";
import SiteLayout from "./layouts/SiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Gallery from "./views/front/pages/Gallery";
import PreMadeTemplate from "./views/front/pages/PreMadeTemplate";
import UserProfile from "./views/front/pages/UserProfile";

// dashboard routes
import Events from "./views/dashboard/pages/Events";
import Feedbacks from "./views/dashboard/pages/Feedbacks";
import Rating from "./views/dashboard/pages/Rating";
import User from "./views/dashboard/pages/Users";
import EventTool from "./tool/EventTool";
import { elements } from "chart.js";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import ResetPassword from "./views/auth/ResetPassword";

const routesConfig = [
  {
    element: <SiteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/premadetemplates",
        element: <PreMadeTemplate />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/events",
        element: <Events />,
      },
      {
        path: "/dashboard/feedbacks",
        element: <Feedbacks />,
      },
      {
        path: "/dashboard/rating",
        element: <Rating />,
      },
      {
        path: "/dashboard/users",
        element: <User />,
      },
      {
        path: "/dashboard/userprofile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/eventtool",
    element: <EventTool />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/auth/resetpassword",
    element: <ResetPassword />,
  },
];

export default routesConfig;
