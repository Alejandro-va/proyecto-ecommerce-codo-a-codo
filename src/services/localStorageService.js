const storageItemsKeys = {
  accessToken: "ectoken",
  refreshToken: "ecrtoken",
  user: "ecuser",
  cart: "eccart",
  orders: "ecorders"
}

export const setToken = (token) => {
  saveItem(storageItemsKeys.accessToken, token);
}

export const getToken = () => {
  return getItem(storageItemsKeys.accessToken)
}

export const setRefreshToken = (token) => {
  saveItem(storageItemsKeys.refreshToken)
}

export const getRefreshToken = () => {
  return getItem(storageItemsKeys.refreshToken);
}

/*
  User object structure expected to be saved in storage

  user: {
    displayName: "ecname", 
    email: "ecemail", 
    emailVerified: "ecverified", 
    uid: "ecuid",
  } 
*/
export const setUser = (user) => {
  saveItem(storageItemsKeys.user, JSON.stringify(user))
}

export const getUser = () => {
  return getItem(storageItemsKeys.user);
}

export const setCart = (cart) => {
  saveItem(storageItemsKeys.cart, JSON.stringify(cart))
}

export const getCart = () => {
  return getItem(storageItemsKeys.cart)
}

export const setOrders = (orders) => {
  saveItem(storageItemsKeys.orders, JSON.stringify(orders))
}

export const getOrders = () => {
  return JSON.parse(localStorage.getItem(storageItemsKeys.orders));
}

export const addOneOrder = (order) => {
  const orders = getOrders()?? [];
  orders.push(order)
  setOrders(orders);
}

export const clearStorage = () => {
  removeItem(storageItemsKeys.accessToken);
  removeItem(storageItemsKeys.refreshToken)
  removeItem(storageItemsKeys.user);
  removeItem(storageItemsKeys.cart);
  removeItem(storageItemsKeys.orders);
}

// Generic Methods for storing and retrieving local storage data
export const saveItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log(`Error setting ${key}: ${error}`);
    return false;
  }
}

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(`Error removing ${key}: ${error}`)
    return false;
  }
}