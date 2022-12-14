const storageItemsKeys = {
  accessToken: "ectoken",
  refreshToken: "ecrtoken",
  user: "ecuser",
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

export const clearStorage = () => {
  removeItem(storageItemsKeys.accessToken);
  removeItem(storageItemsKeys.refreshToken)
  removeItem(storageItemsKeys.user);
}

// Generic Methods for storing and retrieving local storage data
export const saveItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log(error);
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
    console.log('Error removing data.', error)
    return false;
  }
}