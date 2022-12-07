import CartItem from "./CartItem"

export const CartItemList = ({ cartItems, delFromCart }) => {
  return (
    <ul style={{ marginLeft: '-40px' }}>
      {cartItems?.length > 0 &&
        cartItems?.map((item, index) => (
          <CartItem
            key={index}
            prodElegido={item}
            delFromCart={delFromCart}
          />
        ))}
    </ul>
  )
}