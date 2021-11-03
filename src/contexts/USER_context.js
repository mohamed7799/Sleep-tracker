import { useState, createContext } from "react";

export const USER_CONTEXT = createContext({});

export const USER_CONTEXT_PROVIDER = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <USER_CONTEXT.Provider value={{ user, setUser }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};
