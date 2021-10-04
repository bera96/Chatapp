import React from "react";

export const themes = {
  dark: { color: "white", background: "#6a6a6a" },
  light: { color: "black", background: "#ebebeb" },
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
