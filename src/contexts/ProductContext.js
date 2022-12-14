import { createContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingAction";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { cart, products, total } = state;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch({ type: TYPES.LOAD_PRODUCTS, payload: data }));
  }, [])

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  //metodo para obtener total de carrito
  const loadTotal = () => {
    dispatch({ type: TYPES.TOTAL_CART, payload: "" });
  };

  // useEffect(() => {
  //   loadTotal();
  // }, [cart]);

  return (
    <ProductContext.Provider
      value={{ 
        products,
        cart,
        total,
        addToCart,
        delFromCart,
        clearCart
      }}
    >
    { props.children }
    </ProductContext.Provider >
  )
}

export { ProductContext, ProductProvider };