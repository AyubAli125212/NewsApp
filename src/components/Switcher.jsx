import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="text-red-500">
        <DarkModeSwitch
          style={{ marginBottom: "0rem" }}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={23}
        />
      </div>
    </>
  );
}
