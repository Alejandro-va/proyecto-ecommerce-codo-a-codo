import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../contexts/ProductContext";
import { addOneOrder } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import BtnWhatsapp from "./BtnWhatsapp/BtnWhatsapp";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart, total, delFromCart, clearCart } = useContext(ProductContext);

  const handleCheckout = () => {
    // finalizar la compra
    // guardar una 'order' en storage
    // limpiar el carrito
    // navegar a my-orders
    addOneOrder({ cart: cart, total: total, purchased: new Date() });
    clearCart();
    navigate("/my-orders");
  };

  // TODO add validations on fields to ensure the email happens successfully
  // If there are no items in the cart, show image/message of empty cart and navigate to Products page
  return (
    <article>
      <h3>Carrito</h3>
      <section className="box">
        <h4>TOTAL: ${total.toFixed(2)}</h4>
        <button className="boton-personalizado-borrar" onClick={() => clearCart()}>
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
      </section>

      <button onClick={handleCheckout} disabled={cart.length == 0}>
        Purchase
      </button>
    </article>
  );
};

export default ShoppingCart;
