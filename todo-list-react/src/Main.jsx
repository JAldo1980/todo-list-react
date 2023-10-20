import React, { useState } from "react";
import Todo from "./Todo";

function Main() {
  // handle state

  const [newObjectArr, setNewObjectArr] = useState([]);
  const [inputText, setInputText] = useState("");

  // construct object

  const createObject = () => {
    const itemId = getRandomId();
    const newObject = { item: inputText, id: itemId, star: false };
    setNewObjectArr([...newObjectArr, newObject]);
    setInputText("");
  };

  // create random id

  function getRandomId() {
    const randomChars = "1234567890!@£$%^&*()_+JPMDRSA";
    let newId = "";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * randomChars.length);
      newId += randomChars[randomNumber];
    }
    return newId;
  }

  return (
    <>
      <div className="input-box-el">
        <input
          type="text"
          className="input-el"
          id="text-input"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add items..."
        />
      </div>
      <div className="add-btn-el">
        <button className="btn" id="add-item" onClick={createObject}>
          Add Item
        </button>
      </div>
      <div className="filter-btn-el">
        <button className="btn" id="filter-btn">
          Filter
        </button>
      </div>
      {newObjectArr.map((item) => {
        return <Todo key={item} item={item} />;
      })}
    </>
  );
}

export default Main;
