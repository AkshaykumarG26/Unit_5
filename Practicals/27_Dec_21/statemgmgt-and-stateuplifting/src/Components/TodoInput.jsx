import { useState } from "react"

export const TodoInput = ({getData}) => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)

    }

    const handleClick = () => {
        getData(text)
    }


    return <>
        <input type="text" name="" id="" placeholder="Enter Todo" onChange={handleChange} />
        <button onClick={handleClick}>Add ToDo</button>
    </>
}