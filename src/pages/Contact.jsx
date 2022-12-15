import React, { useState } from "react";
import "./contact.css";

const formInitial = {
  name: "",
  email: "",
  phone: "",
  contenido: "",
};

const Contact = () => {
  const [form, setForm] = useState(formInitial);

  const handleReg = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/xxxxxxxxxx@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setForm(formInitial);
  };
  return (
    <div className="contact  wrapper_mar_pag">
      <div className="contact__A ">
        <h2 className="contact__h2" id="contacto">Contacto</h2>
        <p className="contact__P">

        Lamejor tienda en linea con los productos y servicios de calidad. {/* Dirección: 63 Walton Terrace Monroe NY 10950
        Correo Electrónico: mp.albertorey@gmail.com */}
        </p>
      </div>
      <div className="formulario contact__B ">
        {" "}
{/*         <hr
          style={{
            color: "#fff",
            height: ".2px",
            width: "80%",
            margin: "0 auto 3rem auto",
          }}
        /> */}
        <form action="" className="formulario" onSubmit={handleSubmit}>
          <div className="formCaption">
            <h2 className="formh2">ENVÍA TU PREGUNTA{/* {t("contact.message1")} */}</h2>
            <h3 className="formh3">Te responderemos a la brevedad posible{/* {t("contact.message2")} */}</h3>
          </div>
          <div className="inputs">
            <input
              id="inputName"
              type="text"
              placeholder=/* {t("contact.form.name")} */"Nombre"
              name="name"
              value={form.name}
              onChange={handleReg}
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
              required
              /* autoFocus */
            />
            <input
              id="inputEmail"
              type="email"
              placeholder=" Correo "/* {t("contact.form.email")} */
              name="email"
              value={form.email}
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              onChange={handleReg}
              required
            />
            <input
              id="inputPhone"
              type="number"
              placeholder= "Teléfono" /* {t("contact.form.phone")} */
              name="phone"
              value={form.phone}
              onChange={handleReg}
              required
            />
          </div>
          <div className="area">
            <textarea
              name="contenido"
              placeholder= "Mensaje"/* {t("contact.form.message")} */
              id="textareas"
              cols="30"
              rows="10"
              maxlength="255"
              data-pattern="^.{1,255}$"
              value={form.contenido}
              onChange={handleReg}
              required
            ></textarea>
          </div>
          <div className="botonEnviar">
            <input type="submit" value= "Enviar"/* {t("contact.form.send")} */ />
          </div>

          {/*         <div className="contact-form-loader none">
          <img src="./assets/oval.svg" alt="Cargano" />
        </div>
        <div className="contact-form-response none">
          <p>Los datos han sido enviados</p>
        </div> */}
        </form>
{/*         <hr
          style={{
            color: "#fff",
            height: ".2px",
            width: "80%",
            margin: "3rem auto 3rem auto",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Contact;