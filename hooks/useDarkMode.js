import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [themeStatus, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    themeStatus === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [themeStatus, themeToggle];
};
