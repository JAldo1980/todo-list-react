import React, { useState } from "react";

function Main() {
  const [newObjectArr, setNewObjectArr] = useState([]);
  const [inputText, setInputText] = useState("");

  //   create random ID
  let newId = [];
  const randomChar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "J",
    "P",
    "D",
    "M",
    "P",
    "A",
    "!",
    "@",
    "£",
    "$",
    "%",
    "&",
    "?",
    "*",
    "+",
  ];

  function getRandomId() {
    newId = [];
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * randomChar.length);
      let randomId = randomChar[randomNumber];
      newId.push(randomId);
    }
  }

  function createObject() {
    getRandomId();
    const newObject = { item: inputText, id: newId.join(""), star: false };
    setNewObjectArr([...newObjectArr, newObject]);
    setInputText("");
  }

  return (
    <>
      <div className="input-el-box">
        <input
          type="text"
          id="input-text"
          placeholder="Add items here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="btn-el">
          <button className="btn" id="add-btn" onClick={createObject}>
            Add item
          </button>
        </div>
        <div className="btn-el">
          <button className="btn" id="filter-btn">
            Filter
          </button>
        </div>
      </div>
      <section id="output">
        {newObjectArr.map((item) => (
          <div key={item.id} className="item-el">
            <div className="item-left-col">
              <p>{item.item}</p>
              <button className="edit-btn">Edit</button>
            </div>
            <p className="star-icon">{item.star ? "★" : "✩"}</p>
          </div>
        ))}
      </section>
    </>
  );
}
export default Main;
