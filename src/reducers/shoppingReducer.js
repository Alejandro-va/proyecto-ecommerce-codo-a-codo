import { TYPES } from "../actions/shoppingAction";

//FUNCION INICIALIZADORA
export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

//FUNCION REDUCER
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (producto) => producto.id === action.payload
      );
      console.log("newItem: ", newItem);
      let itemInCart = state.cart.find((item) => item.id === newItem.id); //si el id de mi carrito coincide con el id newItem lo guardo en mi variable
      console.log("itemInCart: ", itemInCart);
      //console.log("cart: ", cart);

      // variable es nula,
      //NO- sumale un numero a su quantity :
      //SI- pintalo y agregale su primer numero al quantity
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 } //le sumo uno
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] }; //la primera pintada
      /*      return {
        ...state,
        cart: [...state.cart, { ...newItem, quantity: 1 }],
      }; */
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      console.log(itemToDelete);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
