import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "../index.css";
import Home from "./pages/home";
import Login from "./pages/login";
import ProtectedRoute from "./routes/protectedroutes";
import Menu from "./pages/menu";
import Appetizers from "./menuitems/appetizers";
import Cakes from "./menuitems/cakes";
import Coffee from "./menuitems/coffee";
import Curddishes from "./menuitems/curddishes";
import Drinks from "./menuitems/drinks";
import Roti from "./menuitems/roti";
import Sabji from "./menuitems/sabji";
import Salad from "./menuitems/salad";
import Soup from "./menuitems/soup";
import Desserts from "./menuitems/desserts";
import Common from "./constants/common";
import Booking from "./pages/booking";
import Contact from "./pages/contact";
import About from "./pages/about";
import CartSummary from "./pages/cart/cartSummary";
import RegisterCustomer from "./pages/registercustomer";
import CustomerLogin from "./pages/customerlogin";
import AdminDashboard from "./pages/admindashboard/admindashboard";
import Usertype from "./pages/usertype";
import AuthRoutes from "./routes/authRoutes";
import CustomerDashboard from "./pages/customerdashboard";
import Wishlist from "./pages/wishlist";
const router = createBrowserRouter([
  {
    element: <AuthRoutes />,
    children: [
      {
        path: "/",
        element: <Usertype />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "/registercustomer",
        element: <RegisterCustomer />,
      },
      {
        path: "/customerlogin",
        element: <CustomerLogin />,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element: <Common />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/home/about",
            element: <About />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/home/booking",
            element: <Booking />,
          },
          {
            path: "/home/contact",
            element: <Contact />,
          },
          {
            path: "/home/customerdashboard",
            element: <CustomerDashboard />,
          },
          {
            path: "/home/menu",
            element: <Menu />,
          },
           {
            path: "/home/wishlist",
            element: <Wishlist />,
          },
          {
            path: "appetizers",
            element: <Appetizers />,
          },
          {
            path: "cakes",
            element: <Cakes />,
          },
          {
            path: "coffee",
            element: <Coffee />,
          },
          {
            path: "drinks",
            element: <Drinks />,
          },
          {
            path: "curddishes",
            element: <Curddishes />,
          },
          {
            path: "desserts",
            element: <Desserts />,
          },
          {
            path: "roti",
            element: <Roti />,
          },
          {
            path: "sabji",
            element: <Sabji />,
          },
          {
            path: "salad",
            element: <Salad />,
          },
          {
            path: "soup",
            element: <Soup />,
          },
          {
            path: "cartSummary",
            element: <CartSummary />,
          },
        ],
      },
    ],
  },

  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
