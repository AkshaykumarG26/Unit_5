import React from "react";

function TodoList({ title, id, status, handleToggle }) {
  return (
    <div>
      <h3>{title}</h3>

      <button onClick={() => handleToggle(id)}>
        {" "}
        {status ? "TRUE" : "FALSE"}
      </button>
    </div>
  );
}

export { TodoList };
