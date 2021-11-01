import { useState, createContext } from "react";

export const API_URL_CONTEXT = createContext({});

export const API_URL_PROVIDER = ({ children }) => {
  const [API_URL] = useState("http://localhost:5000");
  return (
    <API_URL_CONTEXT.Provider value={API_URL}>
      {children}
    </API_URL_CONTEXT.Provider>
  );
};
