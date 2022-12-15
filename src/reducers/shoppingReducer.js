import { TYPES } from "../actions/shoppingAction";
import { setCart } from "../services/localStorageService";

//FUNCION INICIALIZADORA
export const shoppingInitialState = {
  products: [],
  cart: [],
  total: 0,
  categories: [],
  allProducts: [],
};

//FUNCION REDUCER
export function shoppingReducer(state, action) {
  switch (action.type) {
    /****************************************************
     *SELECCIONAR PRODUCTOS POR CATEGORIA
     ****************************************************/
    case TYPES.FILTER_PRODUCTS: {
      let filterProducts = state.allProducts;
      if (action.payload !== "all") {
        filterProducts = state.allProducts.filter((product) => {
          return product.category === action.payload;
        });
      }
      return {
        ...state,
        products: filterProducts,
      };
    }
    
    case TYPES.LOAD_PRODUCTS: {
      const categories = action.payload.reduce((acc, product) => {
        if (!acc.includes(product.category)) {
          acc.push(product.category);
        }
        return acc;
      }, []);
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
        categories: categories,
      };
    }

    case TYPES.LOAD_CART: {
      return {
        ...state,
        cart: action.payload
      }
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
      const updatedState = itemInCart ? {
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

      setCart(updatedState.cart);
      return updatedState;
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      let updatedTotal = state.total - itemToDelete.price;

      const updatedState = itemToDelete.quantity > 1
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

        setCart(updatedState.cart)
        return updatedState;
    }
    // Review why this method is not working properly
    case TYPES.REMOVE_ALL_FROM_CART: {
      let priceToRemove = 0;
      const updatedState = {
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
      setCart(updatedState.cart);
      return updatedState;
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
      const updatedState = {
        ...state,
        cart: [],
        total: 0
      };
      setCart(updatedState.cart);
      return updatedState;
    }

    default: {
      return state;
    }
  }
}
