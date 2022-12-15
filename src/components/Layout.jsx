import { Outlet } from "react-router-dom";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart"
// TODO show / hide cart on header cart icon click
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside className="hidden">
        <ShoppingCart />
      </aside>
      {/* Review if we want to include a footer or not */}
      <footer>
        
      </footer>
    </>
  )
}

export default Layout;