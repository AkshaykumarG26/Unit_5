import { useEffect, useState } from "react"

export const Todo = () => {

    const [text, setText] = useState("")
    const [list, setList] = useState([])


    useEffect(() => {
        getTodo()
    },[])


    const getTodo = () => {
        fetch("http://localhost:3001/todos")
        .then((d) => d.json())
        .then((res) => {
            setList(res)
        })
    }



    const handleTodo = () => {
        const payload = {
            title: text,
            status: false
        }
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
            getTodo()
        })
    }


    return (
        <div>
            <input value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
                name="" id=""
            />
            <button onClick={handleTodo}>Add ToDo</button>

            {list.map(e => (
                <div>{e.title}</div>
            ))}
        </div>
    )
}