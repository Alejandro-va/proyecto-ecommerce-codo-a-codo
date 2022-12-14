import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../contexts/ProductContext";

const ShoppingCart = () => {
  const { cart, total, delFromCart, clearCart } = useContext(ProductContext);

  // TODO add validations on fields to ensure the email happens successfully
  // If there are no items in the cart, show image that navigates to Products page
  return (
    <article>
      <h3>Carrito</h3>
      <section className="box">
        <h4>TOTAL: ${total.toFixed(2)}</h4>
        <button onClick={clearCart}>Limpiar Carrito</button>

        {/*************************************************
        PRODUCTOS SELECIONADOS
        *************************************************/}
        {cart?.length > 0 &&
          cart?.map((item, index) => (
            <CartItem
              key={index}
              prodElegido={item}
              delFromCart={delFromCart}
            />
          ))}
      </section>
    </article>
  );
};

export default ShoppingCart;
