import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

import { v4 as uuid } from "uuid";

function Todo() {
  const [data, setData] = useState([]);

  const [showAll, setShowAll] = useState(true);

  const handleAdd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    };
    setData([...data, payload]);
  };

  const handleDelete = (id) => {};

  const handleToggle = (id) => {
    const updateTodo = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updateTodo);
  };

  const handleUpdate = (id) => {};

  return (
    <div>
      <TodoInput onClick={handleAdd} />
      {data
        .filter((item) => (showAll ? true : !item.status))
        .map((item) => (
          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={item.id}
            {...item}
          />
        ))}

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show only pending task" : "Show all"}
      </button>
    </div>
  );
}

export { Todo };
