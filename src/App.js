import { SessionProvider } from "./contexts/SessionContext";
import ShoppingCart from "./components/ShoppingCart";
import {
  RouterProvider
} from "react-router-dom"
import appRouter from "./router/appRouter";
import { ProductProvider } from "./contexts/ProductContext";

function App() {

  return (
    <RouterProvider router={appRouter}>
      {/* <ProductProvider> */}
        {/* <SessionProvider> */}
          {/* <ShoppingCart /> */}
        {/* </SessionProvider> */}
      {/* </ProductProvider> */}
    </RouterProvider>
  );
}

export default App;