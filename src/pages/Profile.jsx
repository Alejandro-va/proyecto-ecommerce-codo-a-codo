import './Profile.css';
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import OrderList from "../components/OrderList";
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/firebaseService';

export const Profile = () => {
  const { loggedUser } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout()) {
      navigate('/products');
    }
  }

  return (
    <>
    <div className="profile-container">
      <h2>Profile</h2>
      {!!loggedUser && (
        <>
          <p>Name: {loggedUser.displayName ?? ''}</p>
          <p>Email: {loggedUser.email}</p>
        </>
      )}
      <button onClick={handleLogout}>LOG OUT</button>
    </div>

      <hr></hr>

      <OrderList />
    </>
  )
}

export default Profile;