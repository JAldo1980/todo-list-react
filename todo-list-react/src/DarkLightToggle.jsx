import React, { useState } from "react";
import "./index.css";

const DarkLightToggle = ({ isDark, toggleTheme }) => {
  return (
    <div className="dark-light-toggle" onClick={toggleTheme}>
      {isDark ? "🌙" : "☀️"}
    </div>
  );
};

export default DarkLightToggle;
