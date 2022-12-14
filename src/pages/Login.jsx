import { useNavigate } from "react-router-dom";
import { signIn } from "../services/firebaseService";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    const email = e.currentTarget["email"].value;
    const password = e.currentTarget["password"].value;
    if (await signIn(email, password)) {
      // Navigate to Home Page ( Product List )
      // Navigate to Previous Page with user logged
      navigate('/products')
    } else {
      console.log("Error Signing In")
    }
  }

  return (
      <form onSubmit={handleSignin}>
        <button type="submit">Signin</button>
        <input type={"text"} name="email" />
        <input type={"password"} name="password" />
      </form>
  )
}

export default Login;