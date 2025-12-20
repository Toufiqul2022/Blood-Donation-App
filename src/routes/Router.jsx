import { createBrowserRouter, Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageProducts from "../Pages/Dashboard/MyRequest";
import AddRequest from "../Pages/Dashboard/AddRequest";
import AllUsers from "../Pages/Dashboard/AllUsers";
import PrivateRoute from "./PrivateRoute";
import Donate from "../Pages/Donate";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import SearchRequest from "../Pages/searchRequest";
import BloodDonationRequests from "../Pages/BloodDonationRequests";
import DonationRequestDetails from "../Pages/DonationRequestDetails";
import Profile from "../Pages/Dashboard/Profile";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import AllRequest from "../Pages/Dashboard/AllRequest";
import VolunteerAllRequests from "../Pages/Dashboard/VolunteerAllRequests";

/* 🔁 DASHBOARD ROLE REDIRECT (INLINE) */
const DashboardRedirect = () => {
  const { role, loading } = useContext(AuthContext);

  if (loading) return null;

  if (role === "admin") return <Navigate to="/dashboard/admin" replace />;
  if (role === "donor") return <Navigate to="/dashboard/donor" replace />;
  if (role === "volunteer")
    return <Navigate to="/dashboard/admin" replace />;

  return <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      {
        path: "funding",
        element: (
          <PrivateRoute>
            <Donate />
          </PrivateRoute>
        ),
      },

      { path: "success-payment", element: <PaymentSuccess /> },
      { path: "search", element: <SearchRequest /> },
      { path: "requests", element: <BloodDonationRequests /> },

      {
        path: "requests/:id",
        element: (
          <PrivateRoute>
            <DonationRequestDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // 🚫 NO DEFAULT DASHBOARD PAGE
      // 🔁 AUTO REDIRECT BASED ON ROLE
      { index: true, element: <DashboardRedirect /> },

      // 👤 DONOR
      { path: "donor", element: <Dashboard /> },
      { path: "add-request", element: <AddRequest /> },
      { path: "my-request", element: <ManageProducts /> },

      // 👮 ADMIN
      { path: "admin", element: <AdminDashboard /> },
      { path: "all-users", element: <AllUsers /> },
      { path: "all-requests", element: <AllRequest /> },

      // 🤝 VOLUNTEER
      {
        path: "all-blood-donation-request",
        element: <VolunteerAllRequests />,
      },

      // 👤 COMMON
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
