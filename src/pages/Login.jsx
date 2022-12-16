import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/firebaseService";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    const email = e.currentTarget["email"].value;
    const password = e.currentTarget["password"].value;
    if (await signIn(email, password)) {
      // Navigate to Home Page ( Product List )
      // Navigate to Previous Page with user logged
      navigate("/products");
    } else {
      console.log("Error Signing In");
    }
  };

  return (
    <div className="body-login">
      <button onClick={() => navigate(-1)}>Volver Atras</button>
      <h2>Iniciar Sesion</h2>
      <form onSubmit={handleSignin}>
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
        <button type="submit">Iniciar sesion</button>
      </form>

      <p>
        ¿No tenes una cuenta? <Link to="/register">Registrate</Link>
      </p>
    </div>
  );
};

export default Login;
