"use client";
import { ThemeProvider } from "next-themes";

const ThemingProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemingProvider;
