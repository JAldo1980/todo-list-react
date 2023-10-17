import React, { useState, useTransition } from "react";
import Container from "./Container";
import Header from "./Header";
import Toggle from "./Toggle";
import "./App.css";
import "./index.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <Container>
        <Header />
        <Toggle isToggled={isToggled} handleToggle={handleToggle} />
      </Container>
    </>
  );
}
export default App;
