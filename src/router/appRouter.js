import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Register from "../pages/Register";
import ShoppingCart from "../components/ShoppingCart";
import ContactForm from "../pages/Contact";
import Profile from "../pages/Profile";
import MyOrders from "../pages/MyOrders";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default appRouter;
