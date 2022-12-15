import './App.css';
import {
  RouterProvider
} from "react-router-dom"
import appRouter from "./router/appRouter";
import { ProductProvider } from './contexts/ProductContext';
import { SessionProvider } from './contexts/SessionContext';

function App() {

  return (
    <SessionProvider>
      <ProductProvider>
        <RouterProvider router={appRouter} />
      </ProductProvider>
    </SessionProvider>
  );
}

export default App;