import React, { useReducer, useEffect } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Navbar from "./Navbar/Navbar";
import ScrollButton from "./scrollButton/ScrollButton";
import BtnWhatsapp from "./whatsapp.jsx/BtnWhatsapp";

const ShoppingCart = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => loadProducts(data));
  }, []);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  //hago referencia al objeto q inicia el estado: shoppingInitialState
  const { cart, products, total, categories } = state;

  /****************************************************
   *METODOS DEL CARRITO
   ****************************************************/
  //metodo para filtrar productos
  const filterProducts = (category) => {
    dispatch({ type: TYPES.FILTER_PRODUCTS, payload: category });
  };

  //metodo para cargar 'products' con API
  const loadProducts = (products) => {
    dispatch({ type: TYPES.LOAD_PRODUCTS, payload: products });
  };

  //metodos para productos
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    //console.log("borrar:", id);
    //dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      console.log(id, all);
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      console.log(id, all);
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  //metodo para obtener total de carrito
  const loadTotal = () => {
    dispatch({ type: TYPES.TOTAL_CART, payload: "" });
  };

  useEffect(() => {
    loadTotal();
  }, [cart]);

  /****************************************************
   *SCROLL
   ****************************************************/
  const [scrollHeight, setScrollHeight] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset; //obtiene el scroll en "Y"
    setScrollHeight(position);
    //console.log(position);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div>
      <Navbar />
      <ScrollButton isScrolling={scrollHeight} />
      <BtnWhatsapp />
      <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
        Tu tienda online 🛒
      </h2>
      <h3 style={{ display: "inline-block", marginLeft: "20px" }}>
        Categorias:
      </h3>
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
                onClick={() => filterProducts(c)}
              >
                {c.toUpperCase()}
              </button>
            </li>
          ))}
        <li key="all" style={{ display: "inline-block" }}>
          <button
            className="boton-personalizado"
            onClick={() => filterProducts("all")}
          >
            MOSTRAR TODOS
          </button>
        </li>
      </ul>
      <h3 style={{ display: "inline-block", marginLeft: "20px" }}>
        Productos:
      </h3>
      <article className="box grid-responsive">
        {products?.length > 0 &&
          products?.map((el) => (
            <ProductItem key={el.id} data={el} addToCart={addToCart} />
          ))}
        {console.log(products.length)}
      </article>
      <h3 style={{ display: "inline-block", marginLeft: "20px" }}>Carrito:</h3>
      <article className="box">
        <h4>TOTAL: ${total.toFixed(2)}</h4>
        <button className="boton-personalizado-borrar" onClick={clearCart}>
          Limpiar Carrito
        </button>

        {/*************************************************
        RENDERIZAR LOS PRODUCTOS SELECIONADOS
        *************************************************/}
        {cart?.length > 0 &&
          cart?.map((item, index) => (
            <CartItem
              key={index}
              prodElegido={item}
              delFromCart={delFromCart}
            />
          ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
