import React from "react";

function Toggle({ isToggled, handleToggle }) {
  return (
    <>
      <div className="toggle-box-el">
        <div className="toggle-el" onClick={handleToggle}>
          {isToggled ? "☀️" : "🌙"}
        </div>
      </div>
    </>
  );
}

export default Toggle;
