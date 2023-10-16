import React, { useState } from "react";

export default function CreateTodo({ onCreateTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        star: false,
      };
      onCreateTodo(newTodo);
      setInputValue(""); // Clear the input field
    }
  };



  return (
    <>
      <div className="input-el-box">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
      </div>
      <section className="input-functionality-box">
        <button className="btn add-btn" onClick={handleAddTodo}>
          Add Item
        </button>
        <button className="btn filter-btn">Filter Item</button>
      </section>
    </>
  );
}
