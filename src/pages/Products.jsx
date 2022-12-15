import { useContext } from "react";
import ProductList from "../components/ProductList";
import { ProductContext } from "../contexts/ProductContext";

export const Products = () => {
  const { 
    products, 
    addToCart,
    categories,
    filterProductsByCategory
   } = useContext(ProductContext);

  return (
    <ProductList
      products={products}
      addToCart={addToCart}
      categories={categories}
      filterProductsByCategory={filterProductsByCategory}
    />
  )
}

export default Products;