import React, { useReducer, useEffect } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import { CartItemList } from "./CartItemList";
import ProductItem from "./ProductItem";
<<<<<<< HEAD
import { ProductList } from "./ProductList";
=======
import Navbar from "./Navbar/Navbar";
>>>>>>> main

const ShoppingCart = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => loadProducts(data));
  }, []);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  //hago referencia al objeto q inicia el estado: shoppingInitialState
  const { cart, products, total } = state;

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

  return (
    <div>
      <Navbar />
      <h2>Tu tienda online 🛒</h2>
      <ProductList
        products={products}
        addToCart={addToCart}
      />
      <section className="box">
        <h4>TOTAL: ${total.toFixed(2)}</h4>
        <button onClick={clearCart}>Limpiar Carrito</button>
        <CartItemList
          cartItems={cart}
          delFromCart={delFromCart}
        />
      </section>
    </div>
  );
};

export default ShoppingCart;
