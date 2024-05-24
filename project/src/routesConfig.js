import React from "react";
import { useAuth } from '../src/views/auth/AuthContext';
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
import Objects from "./views/dashboard/pages/Objects";
import Feedback from "./views/dashboard/pages/FeedBack";
import User from "./views/dashboard/pages/Users";
import EventTool from "./tool/EventTool";
import PaymentTransactions from "./views/dashboard/pages/PaymentTransactions";
import UserProfileDashboard from "./views/dashboard/pages/UserProfile";

// auth routes
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import ResetPassword from "./views/auth/ResetPassword";

// PrivateRoute
import PrivateRoute from './PrivateRoute';

const RoutesConfig = (isAuthenticated) => {
  const { isLoggedIn } = useAuth();

  return [
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
        element: <PrivateRoute element={<DashboardHome />} />,
      },
      {
        path: "/dashboard/feedbacks",
        element: <PrivateRoute element={<Feedback />} />,
      },
      {
        path: "/dashboard/events",
        element: <PrivateRoute element={<Events />} />,
      },
      {
        path: "/dashboard/objects",
        element: <PrivateRoute element={<Objects />} />,
      },
      {
        path: "/dashboard/users",
        element: <PrivateRoute element={<User />} />,
      },
      {
        path: "/dashboard/userprofile",
        element: <PrivateRoute element={<UserProfileDashboard />} />,
      },
    ],
  },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute element={<DashboardHome />}  adminOnly={true}/>,
        },
        // {
        //   path: "/dashboard/transactions",
        //   element: <PrivateRoute element={<PaymentTransactions />} />,
        // },
        {
             path: "/admin/dashboard/feedbacks",
            element: <PrivateRoute element={<Feedback />} adminOnly={true}/>,
        },
        {
          path: "/admin/dashboard/events",
          element: <PrivateRoute element={<Events />} adminOnly={true}/>,
        },
        {
          path: "/admin/dashboard/objects",
          element: <PrivateRoute element={<Objects />} adminOnly={true}/>,
        },
        {
          path: "/admin/dashboard/users",
          element: <PrivateRoute element={<User />} adminOnly={true}/>,
        },
        {
          path: "/admin/dashboard/userprofile",
          element: <PrivateRoute element={<UserProfileDashboard />} adminOnly={true}/>,
        },
      ],
    },
    {
      path: "/eventtool",
      element: <PrivateRoute element={<EventTool /> } />,
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
};

export default RoutesConfig;