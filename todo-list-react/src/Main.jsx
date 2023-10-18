import React, { useState } from "react";
import Todo from "./Todo";

function Main() {
  const [newObjectArr, setNewObjectArr] = useState([]);
  const [inputText, setInputText] = useState("");

  const getRandomId = () => {
    const randomChar = "1234567890JPDMPA!@£$%&?*+";
    let newId = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * randomChar.length);
      newId += randomChar[randomIndex];
    }
    return newId;
  };

  const createObject = () => {
    const newId = getRandomId();
    const newObject = { item: inputText, id: newId, star: false };
    setNewObjectArr([...newObjectArr, newObject]);
    setInputText(""); // Clear the input field
  };

  return (
    <>
      <div className="input-box-el">
        <input
          id="input-text"
          type="text"
          placeholder="Add item"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="btn-el">
        <div className="add-btn-box-el">
          <button className="add-btn-el" id="add-btn" onClick={createObject}>
            Add Item
          </button>
        </div>
        <div className="filter-btn-box-el">
          <button className="filter-btn-el" id="filter-btn">
            Filter
          </button>
        </div>
      </div>
      {newObjectArr.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </>
  );
}

export default Main;
