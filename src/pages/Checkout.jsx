import ShoppingCart from "../components/ShoppingCart";

export const Checkout = () => {
  const handleCheckout = () => {
    // if user confirms the cart, buy items, save the purchase, show successfull operation, show button to redirect to home page
  }

  const handleCancel = () => {
    // navigate to previous page
  }

  return (
    <article>
      <h2>Checkout</h2>
      <ShoppingCart />
      <button
        onClick={handleCheckout}
      >
        BUY
      </button>
      <button
        onClick={handleCancel}
      >
        Cancel
      </button>
    </article>
  )
}

export default Checkout;