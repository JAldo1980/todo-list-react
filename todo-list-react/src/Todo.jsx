import React from "react";

function Todo({ item }) {
  if (!item) {
    return null; // or handle the case when item is undefined
  }

  return (
    <div className="item">
      <div className="item-left-col">
        <p>{item.item}</p>
        <button className="edit-btn">Edit</button>
      </div>
      <p className="star-icon">{item.star ? "★" : "✩"}</p>
    </div>
  );
}

export default Todo;
