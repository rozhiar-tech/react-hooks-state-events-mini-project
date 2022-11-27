import React from "react";

function Task(text) {
  // console.log(text);

  return (
    <div className="task">
      <div className="label">{text.category}</div>
      <div className="text">{text.text}</div>
      <button className="delete" onClick={text.onClick}>X</button>
    </div>
  );
}

export default Task;
