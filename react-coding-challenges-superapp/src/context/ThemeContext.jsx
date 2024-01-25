import { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    // you can name attribute anything you want
    // document.documentElement.setAttribute("data-theme", theme); // add to whole html or whole app
    document.getElementById("themed-div").setAttribute("data-theme", theme); // add id to specific div
  }, [theme]);
  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
