import React from "react";

//data es una variable q trae toda la informacion del estadoinicial del producto desde  shoppinReducer
const ProductItem = ({ data, addToCart }) => {
  let { id, title, price, image } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <img
        src={image}
        style={{ maxWidth: "200px", maxHeight: "200px" }}
        alt={`example ${title} product`}
      />
      <h4>{title}</h4>
      <h5>${price}</h5>
      {/* si le quito la funcion flecha al boton, cuando cargeu la pag se cargarian de una todos los id */}
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
