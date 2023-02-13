import { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <LoginContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </LoginContext.Provider>
  );
};
