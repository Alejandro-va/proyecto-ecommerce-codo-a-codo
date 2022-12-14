import React, { useState, useEffect } from "react";
import "./styles.css";

const Navbar = () => {
  const [mode, setMode] = useState("bedtime");
  const [respMenu, setRespMenu] = useState(false);

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

  return (
    <header className="header">
      <nav class="navbar">
        <div className="logo">
          <img
            src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true"
            alt="logo"
          />
          <div class="text"> Ecommerce </div>
        </div>

        <div className="right full-screen">
          <div className="group darkmode" onClick={() => setModeSite()}>
            <div class="mode">
              <i class="material-icons" onClick={() => setModeSite}>
                {mode}
              </i>
            </div>
          </div>

          <div className="group">
            <i className="material-icons">account_circle</i>
            <a href="/login" className="item">
              <span className="detail">Sign In</span>
            </a>
          </div>

          <div className="group cart ">
            <i className="material-icons">shopping_cart</i>
            <a href="/cart" className="item">
              <span className="detail">Cart</span>
            </a>
          </div>
          <div class="group contact">
            <i className="material-icons">call</i>
            <a href="/contacto" className="item">
              <span className="detail">Contacto</span>
            </a>
          </div>
        </div>
        <div class="group menu" onClick={() => setRespMenu(true)}>
          <i className="material-icons">menu</i>
          <span className="detail">Menu</span>
        </div>
      </nav>
      {respMenu && (
        <div className="menu-responsive">
          <div className="group darkmode" onClick={() => setModeSite()}>
            <div class="mode">
              <i class="material-icons" onClick={() => setModeSite}>
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
          <div class="group contact">
            <a href="/contacto" className="item">
              <i className="material-icons">call</i>
              <span className="detail">CONTACT</span>
            </a>
          </div>
          <div class="group menu" onClick={() => setRespMenu(false)}>
            <i className="material-icons">close</i>
            <span className="detail">CLOSE</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
