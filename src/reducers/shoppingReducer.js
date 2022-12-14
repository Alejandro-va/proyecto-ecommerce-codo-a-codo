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
      // si el id de mi carrito coincide con el id newItem lo guardo en mi variable
      let itemInCart = state.cart?.find((item) => item.id === newItem.id);
      let updatedTotal = state.total + newItem.price
      // variable es nula,
      // NO- sumale un numero a su quantity :
      // SI- pintalo y agregale su primer numero al quantity
      return itemInCart ? {
        ...state,
        cart: state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: updatedTotal
      } : {
        ...state,
        cart: [
          ...state.cart,
          { ...newItem, quantity: 1 }
        ],
        total: updatedTotal
      };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      let updatedTotal = state.total - itemToDelete.price;

      return itemToDelete.quantity > 1
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          total: updatedTotal
        } : {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
          total: updatedTotal
        };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      let priceToRemove = 0;
      return {
        ...state,
        cart: state.cart.filter((el) => {
          let isMatch = el.id !== action.payload
          if (isMatch) {
            priceToRemove = el.quantity * el.price;
          }
          return isMatch;
        }),
        total: state.total -= priceToRemove
      };
    }

    case TYPES.TOTAL_CART: {
      let initialValue = 0;
      state.cart.forEach(
        (product) => (initialValue += product.price * product.quantity)
      );
      return {
        ...state,
        total: initialValue,
      };
    }

    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
        total: 0
      };
    }

    default: {
      return state;
    }
  }
}
