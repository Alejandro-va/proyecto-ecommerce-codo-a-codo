import React from "react";
import "./btnWhatsapp.css";
import Wbtn from "../image/w2.png";

const BtnWhatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=19555555555&text="
      className="containerBtnw"
      target="_blank"
    >
      {/* <div className="wico"> */}
      <img src={Wbtn} alt="" className="btnw" />
      {/* </div> */}
    </a>
  );
};
export default BtnWhatsapp;
