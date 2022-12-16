import React from "react";
import './ProductItem.css';

//data es una variable q trae toda la informacion del estadoinicial del producto desde  shoppinReducer
const ProductItem = ({ data, addToCart }) => {
  let { id, title, price, image } = data;

  const displayTitle = title && title.length > 40 ? title.slice(0, 40).concat("...") : title;

  return (
    <div className="product-item">
      <img
        src={image}
        alt={`example ${title} product`}
      />
      <div className="info">
        <h4>
          <a href="#" title={title}>
            {/* {displayTitle} */}
            {title}
          </a>
        </h4>
        <h5>$ {price}</h5>
        {/* si le quito la funcion flecha al boton, cuando cargeu la pag se cargarian de una todos los id */}
        <button className="boton-personalizado" onClick={() => addToCart(id)}>Agregar</button>
      </div>
    </div>
  );
};

export default ProductItem;
