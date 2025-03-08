import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colors, setColors] = useState({
    accent: '#4db8ff', // Color predeterminado
    background: '#222', // Fondo predeterminado
  });

  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
