import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element:
      <Home />
  },
  {
    path: "products",
    element:
    <Products />
  },
  {
    path: "login",
    element:
     <Login />
  },
  {
    path: "checkout",
    element:
    <Checkout />
  },
  {
    path: "*",
    element:
      <Page404 />
  }
]);

export default appRouter;