import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../services/firebaseService";

export const Register = () => {
  const navigate = useNavigate();

  const handleNewUser = async (e) => {
    e.preventDefault();
    const email = e.currentTarget["email"].value;
    const password = e.currentTarget["password"].value;
    createUser(email, password).then((result) => {
      if (result) {
        navigate("/products");
      } else {
        console.log("An error happened");
      }
    });
  };

  return (
    <>
      <div className="body-login">
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>Registrarse</h2>
        <form onSubmit={handleNewUser}>
          <div className="inputs">
            <label>
              EMAIL
              <input type={"text"} name="email" />
            </label>
            <label>
              CONTRASEÑA
              <input type={"password"} name="password" />
            </label>
          </div>
          <button type="submit">Crear cuenta</button>
        </form>
        <p>
          Si ya tenes una cuenta, <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
