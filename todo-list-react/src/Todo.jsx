import React from "react";

function Todo({ item }) {
  if (!item) {
    return null; // or handle the case when item is undefined
  }
  return (
    <div className="todo-box-el">
      <div className="todo-el">
        <p>{item.item}</p>
        <button>Edit</button>
      </div>
      {item.star ? "★" : "✩"}
    </div>
  );
}

export default Todo;
