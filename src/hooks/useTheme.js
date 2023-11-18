import { useState } from "react";

export const useTheme = () => {
  let initTheme = "";
  if (window.localStorage.getItem("themeMode")) {
    initTheme = window.localStorage.getItem("themeMode");
  } else {
    // 브라우저 테마 정보 확인
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    initTheme = isBrowserDarkMode ? "dark" : "light";
  }

  const [themeMode, setThemeMode] = useState(initTheme);

  return [themeMode, setThemeMode];
};
