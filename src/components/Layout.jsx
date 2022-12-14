import ShoppingCart from "./ShoppingCart"
// TODO show / hide cart on header cart icon click
export const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <aside>
        <ShoppingCart />
      </aside>
      <footer>
        footer
      </footer>
    </>
  )
}