import { createContext, useEffect, useState } from "react";
import { getUser } from "../services/localStorageService";

const SessionContext = createContext();

const SessionProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState(null);

  // review if this is being saved OK
  useEffect(() => {
    const user = getUser();
    if (user !== loggedUser) {
      setLoggedUser(user);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <SessionContext.Provider
      value={{
        loggedUser
      }}
    >
      {props.children}
    </SessionContext.Provider>
  )
}

export { SessionProvider, SessionContext };