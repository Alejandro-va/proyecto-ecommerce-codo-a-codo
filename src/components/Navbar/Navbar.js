import React, {useState, useEffect} from 'react';
import './styles.css';

const Navbar = () => {

  const [mode, setMode] = useState("bedtime");

  let setModeSite = () => {
    if(mode === "bedtime"){
      setMode("sunny");
      document.body.style.background = "rgba(32,32,44)";
      document.body.style.color = 'rgb(208, 218, 228)';
    }else{
      setMode("bedtime");
      document.body.style.background = "white";
      document.body.style.color = 'black';
    }
  }

  return (
    <header className="header">
      <nav class="navbar">
        <div className="logo">
          <img src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true" alt="logo"/>
          <div class="text"> Ecommerce </div>
        </div>
        
        <div className='right'>
          <div className='group darkmode' onClick={() => setModeSite()}>
            <div class="mode" onClick={() => setModeSite}>
              <i class="material-icons">{mode}</i>
            </div>
          </div>

          <div className="group">
            <i className="material-icons" >account_circle</i>
            <a href="/login" className="item">
              <span className="detail">
                Sign In
              </span>
            </a>
          </div>

          <div className="group cart">
            <i className="material-icons">
              shopping_cart
            </i>  
            <a href="/cart" className="item">
              <span className="detail">
                Cart
              </span>
            </a>
          </div>
          <div class="group contact">
            <i className="material-icons" >call</i>
            <a href="/contacto" className="item">
              <span className="detail">
                Contacto
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;