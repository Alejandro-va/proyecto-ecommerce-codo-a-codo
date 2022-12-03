import React, { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  //hago referencia al objeto q inicia el estado: shoppingInitialState
  const { products, cart } = state;

  //metodos para productos
  const addToCart = (id) => {
    console.log(id);
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

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((el) => (
          <ProductItem key={el.id} data={el} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} prodElegido={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
