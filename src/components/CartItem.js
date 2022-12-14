import React from "react";

const CartItem = ({ prodElegido, delFromCart }) => {
  const { id, name, price, quantity } = prodElegido;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}
      </h5>
      <button
        className="boton-personalizado-borrar"
        style={{ display: "inline" }}
        onClick={() => delFromCart(id)}
      >
        Eliminar Uno
      </button>

      <button
        className="boton-personalizado-borrar"
        onClick={() => delFromCart(id, true)}
        style={{ display: "inline", marginLeft: "1rem" }}
      >
        Eliminar todos
      </button>
    </div>
  );
};

export default CartItem;
