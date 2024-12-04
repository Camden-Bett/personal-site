import React, { createContext, useEffect, useState } from "react";

export const PaletteContext = createContext();

export const PaletteProvider = ({ children }) => {
  const [palette, setPalette] = useState("capital");

  const switchPalette = (newPalette) => {
    setPalette(newPalette);
  };

  const getColors = () => {
    const bodyStyles = getComputedStyle(document.body);
    return {
      background: bodyStyles.getPropertyValue("--background").trim(),
      primary: bodyStyles.getPropertyValue("--primary").trim(),
      accentContrast: bodyStyles.getPropertyValue("--accent-contrast").trim(),
      accentSimilar: bodyStyles.getPropertyValue("--accent-similar").trim(),
      accentExtra: bodyStyles.getPropertyValue("--accent-extra").trim(),
    };
  }

  return (
    <PaletteContext.Provider value={{ palette, switchPalette, getColors }}>
      {children}
    </PaletteContext.Provider>
  );
};