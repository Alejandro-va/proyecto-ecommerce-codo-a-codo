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

        <div className="grupo-icono">
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
              <Link to="/login" className="item">
                <span className="detail">Sign In</span>
              </Link>
            ) : (
              <Link to="/profile" className="item">
                <span className="detail">{loggedUser.email}</span>
              </Link>
            )}
          </div>

          <div className="group cart">
            <i className="material-icons">shopping_cart</i>
            <Link to="/cart" className="item">
              <span className="detail">Cart</span>
              <span className="cart-items-count">{getCartItemCount()}</span>
            </Link>
          </div>
          <div className="group nav-contact">
            <i className="material-icons">call</i>
            <Link to="/contact" className="item">
              <span className="detail">Contacto</span>
            </Link>
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
            <Link to="/login" className="item">
              <i className="material-icons">account_circle</i>
              <span className="detail">SIGN IN</span>
            </Link>
          </div>

          <div className="group cart">
            <Link to="/cart" className="item">
              <i className="material-icons">shopping_cart</i>
              <span className="detail">CART</span>
            </Link>
          </div>
          <div className="group contact">
            <Link to="/contact" className="item">
              <i className="material-icons">call</i>
              <span className="detail">CONTACT</span>
            </Link>
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
