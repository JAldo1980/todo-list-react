import React, { useState, useTransition } from "react";
import Header from "./Header";
import Container from "./Container";
import Toggle from "./Toggle";
import Main from "./Main";
import Todo from "./Todo";
import "./index.css";
import "./App.css";
import "./index.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    document.querySelector("body").classList.toggle("dark");
  };

  return (
    <>
      <Container>
        <Header />
        <Toggle isToggled={isToggled} handleToggle={handleToggle} />
        <Main />
        <Todo />
      </Container>
    </>
  );
}
export default App;
