import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem"

import { nanoid } from "nanoid"

 

export const Todo = () => {

    const [list, setList] = useState([])


    const handleClick = (data) => {

        const payload = {
            title: data,
            status: false,
            id: nanoid(7)
        }
        setList([...list, payload])
    }

    const handleDelete = (id) => {
        // const updatedData = list.filter((e) => 
        //     e.id !== id
        // )

        const updatedData = [...list]
        updatedData.splice(id,1)
        setList(updatedData)
    }
    



    return <>
        <TodoInput getData = {handleClick}  />
        {/* {list.map((e) => (
            <TodoItem key = {e.id} title = {e.title} status = {e.status} />
        ))} */}

        {/* above line can be written as shown below */}


        {list.map((e) => (
            <TodoItem key = {e.id} {...e} removeData = {handleDelete}/>

            
        ))}
    </>
}