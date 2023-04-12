import { createContext } from "react";
import { theme } from "./theme";
{/*định nghĩa một interface chỉ định thuộc tính props */}
type ThemeContextProviderProps = {
  children: React.ReactNode;//thuộc tính đại diện cho các thành phần con
};
export const ThemeContext = createContext(theme);// tạo ra một context với giá trị ban đầu là theme

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
