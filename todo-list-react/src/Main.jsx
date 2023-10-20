import React, { useState } from "react";
import Todo from "./Todo";

function Main() {
  // create state
  const [newObjectArr, setNewObjectArr] = useState([]);
  const [inputText, setInputText] = useState("");

  // create random ID
  function getRandomId() {
    const randomChar = "1234567890!@£$%^&*?JPDMRSA";
    let newId = "";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * randomChar.length);
      newId += randomChar[randomNumber];
    }
    return newId;
  }

  // create object
  const createObject = () => {
    const newId = getRandomId();
    const newObject = { item: inputText, id: newId, star: false };
    setNewObjectArr([...newObjectArr, newObject]);
    setInputText("");
  };

  // render buttons / inputs / outputs

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
      {newObjectArr.map((item) => {
        <Todo key={item} item={item} />;
      })}
    </>
  );
}

export default Main;
