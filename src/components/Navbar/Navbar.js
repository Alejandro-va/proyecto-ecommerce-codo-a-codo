import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { SessionContext } from "../../contexts/SessionContext";
import "./styles.css";
// TODO item count not counting 'quantity', it's counting array.length
const Navbar = () => {
  const [mode, setMode] = useState("bedtime");
  const [respMenu, setRespMenu] = useState(false);
  const { loggedUser } = useContext(SessionContext);
  const { cart } = useContext(ProductContext);

  let setModeSite = () => {
    if (mode === "bedtime") {
      setMode("sunny");
      document.body.style.background = "rgba(32,32,44)";
      document.body.style.color = "rgb(208, 218, 228)";
    } else {
      setMode("bedtime");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  const getCartItemCount = () => {
    let count = 0;
    if (cart.length > 0) {
      cart.forEach((item) => (count += item.quantity));
    }
    return count;
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/products">
          <div className="logo">
            <img
              src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true"
              alt="logo"
            />
            <div className="text"> Ecommerce </div>
          </div>
        </Link>

        <div class="grupo-icono">
          <div className="right full-screen">
            <div className="group darkmode" onClick={() => setModeSite()}>
              <div className="mode">
                <i className="material-icons" onClick={() => setModeSite}>
                  {mode}
                </i>
              </div>
            </div>

            <div className="group">
              <i className="material-icons">account_circle</i>
              {!loggedUser ? (
                <a href="/login" className="item">
                  <span className="detail">Iniciar sesion</span>
                </a>
              ) : (
                <a href="/profile" className="item">
                  <span className="detail">{loggedUser.email}</span>
                </a>
              )}
            </div>

            <div className="group cart">
              <i className="material-icons">shopping_cart</i>
              <a href="/cart" className="item">
                <span className="detail">Carrito</span>
                <span className="cart-items-count">{getCartItemCount()}</span>
              </a>
            </div>
            <div
              className="group "
              /*               style={{
                border: "solid blue",
                width: "4rem",
                alignSelf: "start",
              }} */
            >
              <i className="material-icons">call</i>
              <a href="/contact" className="item">
                <span className="detail">Contacto</span>
              </a>
            </div>
          </div>
        </div>
        <div className="group menu" onClick={() => setRespMenu(true)}>
          <i className="material-icons">menu</i>
          <span className="detail">Menu</span>
        </div>
      </nav>
      {respMenu && (
        <div className="menu-responsive">
          <div className="group darkmode" onClick={() => setModeSite()}>
            <div className="mode">
              <i className="material-icons" onClick={() => setModeSite}>
                {mode}
              </i>
            </div>
          </div>
          <div className="group">
            <a href="/login" className="item">
              <i className="material-icons">account_circle</i>
              <span className="detail">SIGN IN</span>
            </a>
          </div>

          <div className="group cart">
            <a href="/cart" className="item">
              <i className="material-icons">shopping_cart</i>
              <span className="detail">CART</span>
            </a>
          </div>
          <div className="group contact">
            <a href="/contacto" className="item">
              <i className="material-icons">call</i>
              <span className="detail">CONTACT</span>
            </a>
          </div>
          <div className="group menu" onClick={() => setRespMenu(false)}>
            <i className="material-icons">close</i>
            <span className="detail">CLOSE</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
