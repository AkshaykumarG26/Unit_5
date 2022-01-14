import { useEffect, useState } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // for pagination page and setPage is used
  const [page, setPage] = useState(1)

  useEffect(() => {
    getTodo();
  },[page]);

  const getTodo = () => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=5`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);

      });
  };

  const handleTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodo();
      setText("")
    });
  };

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>Add ToDo</button>
      <br /><br />
      {list.map((e,i) => (
        <div key={i}>{e.title}</div>
      ))}
      <br /><br />

        {/* Pagination */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>



    </>
  );
};
