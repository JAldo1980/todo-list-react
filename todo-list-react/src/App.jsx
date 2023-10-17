import React, { useState, useTransition } from "react";
import "./App.css";

import DarkLightToggle from "./DarkLightToggle";
import Main from "./Main";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
    if (isDark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <>
      <div className={`app ${isDark ? "dark" : "light"}`}>
        <div className="body">
          <header>
            <h1>Todo List</h1>
            <p>(Built with REACT.js)</p>
          </header>
          <DarkLightToggle isDark={isDark} toggleTheme={toggleTheme} />
          <Main />
        </div>
      </div>
    </>
  );
}
export default App;
