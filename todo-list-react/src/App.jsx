import React, { useState, useTransition } from "react";
import "./App.css";
import DarkLightToggle from "./DarkLightToggle";
import CreateTodo from "./CreateTodo";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <>
      <div className="body">
        <header>
          <h1>Todo List</h1>
          <p>(Built with REACT.js)</p>
        </header>
        <DarkLightToggle isDark={isDark} toggleTheme={toggleTheme} />
        <CreateTodo />
      </div>
    </>
  );
}
export default App;
