import { createContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingAction";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import { getCart } from "../services/localStorageService";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { cart, products, total, categories } = state;

  useEffect(() => {
    !!cart && loadTotal();
  }, [cart])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch({ type: TYPES.LOAD_PRODUCTS, payload: data }));

    const cartSaved = getCart();
    if (cartSaved != null) {
      dispatch({ type: TYPES.LOAD_CART, payload: cartSaved });
    }
  }, [])

  //metodo para filtrar productos
  const filterProductsByCategory = (category) => {
    dispatch({ type: TYPES.FILTER_PRODUCTS, payload: category });
  };

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

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        total,
        categories,
        filterProductsByCategory,
        addToCart,
        delFromCart,
        clearCart
      }}
    >
      {props.children}
    </ProductContext.Provider >
  )
}

export { ProductContext, ProductProvider };