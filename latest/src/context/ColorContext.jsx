import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState("#ffffff");

  return (
    <ColorContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </ColorContext.Provider>
  );
};
