import { useState } from "react";
import ProductItem from "./ProductItem";

export const ProductList = ({ products, addToCart }) => {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <>
      <h3>Productos</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilter}
        value={filter}
      />
      <section className="box grid-responsive">
        {products?.length > 0 &&
          products?.filter(p => p.title.includes(filter)).map((el) => (
            <ProductItem
              key={el.id}
              data={el}
              addToCart={addToCart}
            />
          ))}
      </section>
    </>
  )
}

export default ProductList;