import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
export const Box = () => {
  const theme = useContext(ThemeContext);
  const [colorChange, setColorChange] = useState(false);

  const handleButtonClick = () => {
    setColorChange(!colorChange);
  }

  return (
    <div
      style={{ backgroundColor: colorChange ? theme.primary.main : theme.secondary.main, color: theme.primary.text }}
    >
      <button onClick={handleButtonClick}>Change Theme</button>
      Theme Box
    </div>
  );
};

