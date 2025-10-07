import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
};
