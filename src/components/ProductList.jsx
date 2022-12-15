import { useState } from "react";
import BtnWhatsapp from "./BtnWhatsapp/BtnWhatsapp";
import ProductItem from "./ProductItem";

export const ProductList = ({ products, addToCart, categories, filterProductsByCategory }) => {
  const [filter, setFilter] = useState("");
  const [categorySelected, setCategorySelected] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const handleCategoryFilter = (category) => {
    setCategorySelected(category);
    filterProductsByCategory(category);
  }

  return (
    <>
        <BtnWhatsapp />
        <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
          Tu tienda online 🛒
        </h2>
        <h3 style={{ display: "inline-block", marginLeft: "20px" }}>
          Categorias:
        </h3>
        <p>{categorySelected}</p>
        {/*************************************************
        RENDERIZAR LAS CART DE LOS PRODUCTOS
        *************************************************/}
        <ul>
          {categories?.length > 0 &&
            categories?.map((c) => (
              <li
                key={c}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <button
                  className="boton-personalizado"
                  onClick={() => handleCategoryFilter(c)}
                >
                  {c.toUpperCase()}
                </button>
              </li>
            ))}
          <li key="all" style={{ display: "inline-block" }}>
            <button
              className="boton-personalizado"
              onClick={() => handleCategoryFilter("all")}
            >
              MOSTRAR TODOS
            </button>
          </li>
        </ul>

      <h3>Productos</h3>

      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilter}
        value={filter}
      />
      <section className="box grid-responsive">
        {products?.length > 0 &&
          products?.filter(p => p.title.toLocaleLowerCase().includes(filter)).map((el) => (
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