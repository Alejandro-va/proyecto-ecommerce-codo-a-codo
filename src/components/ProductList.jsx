import ProductItem from "./ProductItem"

export const ProductList = ({ products, addToCart }) => {
  return (
    <>
      <h3>Productos</h3>
      <section className="box grid-responsive">
        {products?.length > 0 &&
          products?.map((el) => (
            <ProductItem key={el.id} data={el} addToCart={addToCart} />
          ))}
      </section>
    </>)
}