import React from "react";
import './CartItem.css';

const CartItem = ({ prodElegido, delFromCart }) => {
  const { id, title, price, quantity, image } = prodElegido;
  return (
    <li className={'cart-item'}>
      <figure>
        <img src={image} />
      </figure>
      <div>
        <h4 className="title">{title}</h4>
        <h5 className="price">
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h5>
        {delFromCart && (
          <div className="btns-wrapper">
            <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
            <br />
            <button className="boton-borrar" onClick={() => delFromCart(id, true)}>Eliminar todos</button>
          </div>
        )}
      </div>
    </li>
  );
};

export default CartItem;
