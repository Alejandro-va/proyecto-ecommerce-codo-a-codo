import { useNavigate } from "react-router-dom";
import { createUser } from "../services/firebaseService";

export const Register = () => {
  const navigate = useNavigate();

  const handleNewUser = async (e) => {
    e.preventDefault();
    const email = e.currentTarget["email"].value;
    const password = e.currentTarget["password"].value;
    createUser(email, password).then(result => {
      if (result) {
        navigate('/products')
      } else {
        console.log("An error happened")
      }
    })
  }

return (  <form onSubmit={handleNewUser}>
  <button type="submit">Create Account</button>
  <input type={"text"} name="email" />
  <input type={"password"} name="password" />
</form>)
}

export default Register;