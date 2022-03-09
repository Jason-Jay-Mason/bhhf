import { useDarkMode } from "./useDarkMode";
import { dark, light } from "../styles/theme.variables";
import { createContext, useContext } from "react";

const ThemeContext = createContext();
const ThemeToggleContext = createContext();

export const useThemeStatus = () => {
  return useContext(ThemeContext);
};
export const useThemeToggle = () => {
  return useContext(ThemeToggleContext);
};

export const useTheme = () => {
  return [useContext(ThemeContext), useContext(ThemeToggleContext)];
};

export const ThemeProvider = ({ children }) => {
  const [themeStatus, themeToggle] = useDarkMode();

  return (
    <ThemeContext.Provider value={themeStatus}>
      <ThemeToggleContext.Provider value={themeToggle}>
        <div className={themeStatus === "dark" ? dark : light}>{children}</div>
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};
