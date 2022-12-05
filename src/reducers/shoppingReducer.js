import { TYPES } from "../actions/shoppingAction";

//FUNCION INICIALIZADORA
export const shoppingInitialState = {
  products: [],
  cart: [],
  total: 0,
};

//FUNCION REDUCER
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.LOAD_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (producto) => producto.id === action.payload
      );
      let itemInCart = state.cart?.find((item) => item.id === newItem.id); //si el id de mi carrito coincide con el id newItem lo guardo en mi variable
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

    case TYPES.TOTAL_CART:
      let initialValue = 0;
      console.log(state.cart);
      let totalCart = state.cart.forEach(
        (product) => (initialValue += product.price * product.quantity)
      );
      return {
        ...state,
        total: initialValue,
      };
    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
