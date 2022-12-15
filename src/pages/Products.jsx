import { useContext } from "react";
import ProductList from "../components/ProductList";
import { ProductContext } from "../contexts/ProductContext";

export const Products = () => {
  const { 
    products, 
    addToCart
   } = useContext(ProductContext);

  return (
    <ProductList
      products={products}
      addToCart={addToCart}
    />
  )
}

export default Products;