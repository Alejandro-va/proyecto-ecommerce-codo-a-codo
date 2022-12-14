import React from "react";

const CartItem = ({ prodElegido, delFromCart }) => {
  const { id, name, price, quantity } = prodElegido;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
