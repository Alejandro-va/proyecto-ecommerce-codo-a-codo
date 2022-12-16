import { useState } from "react";
import BtnWhatsapp from "./BtnWhatsapp/BtnWhatsapp";
import ProductItem from "./ProductItem";
import "./products.css";

export const ProductList = ({
  products,
  addToCart,
  categories,
  filterProductsByCategory,
}) => {
  const [filter, setFilter] = useState("");
  const [categorySelected, setCategorySelected] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setCategorySelected(category);
    filterProductsByCategory(category);
  };

  return (
    <>
      <BtnWhatsapp />
      <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
        Tu tienda online 🛒
      </h2>
      <div style={{ marginLeft: "30vw" }}>
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
      </div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="¿Qué estás buscando?"
            onChange={handleFilter}
            value={filter}
          />
        </div>
      </div>
      <p style={{ marginLeft: "43.5vw", fontSize: "3vh", fontWeight: "bold" }}>
        {categorySelected === "all"
          ? "TODOS LOS PRODUCTOS"
          : categorySelected.toUpperCase()}
      </p>

      <section className="box grid-responsive">
        {products?.length > 0 ? (
          products
            .filter((p) => p.title.toLocaleLowerCase().includes(filter))
            .map((el) => (
              <ProductItem key={el.id} data={el} addToCart={addToCart} />
            ))
        ) : (
          <p className="empty-products">No hay resultados para tu busqueda</p>
        )}
      </section>
    </>
  );
};

export default ProductList;
