import './OrderList.css';
import { useEffect, useState } from "react";
import { getOrders } from "../services/localStorageService";
import CartItem from "./CartItem";

export const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = getOrders();
    if (!!storedOrders) {
      setOrders(storedOrders);
    }
  }, [])

  return (
    <>
      <h3>My Orders</h3>
      {orders.map((order, index) => (
        <article key={`order-${order.purchased}-${index}`} className="order">
          <h3 className='order-total'>Total: {order.total}</h3>
          <p className="order-date">Purchased: {order.purchased}</p>
          {order.cart.map((item, idx) => (
            <CartItem
              key={`order-${index}-item-${item.id}-${idx}`}
              prodElegido={item}
            />
          ))}
        </article>
      ))}
    </>
  )
}

export default OrderList;