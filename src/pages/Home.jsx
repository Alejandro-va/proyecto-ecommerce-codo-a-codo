// import ProductList from "../components/ProductList"
import ShoppingCart from "../components/ShoppingCart"
import Products from "./Products";

export const Home = () => {
  return (
    <>
      <h2>My Ecommerce Shopping</h2>
      <Products />
      <ShoppingCart />
    </>
  )
}

export default Home;