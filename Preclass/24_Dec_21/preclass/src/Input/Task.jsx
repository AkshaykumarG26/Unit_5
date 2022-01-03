import React, { useState } from "react";
import { TaskItem } from "./Taskitem";

function Task() {

    const [query, setQuery] = useState("")

    const [tasks, setTasks] = useState([])

    const handleChange = (e) => {
        const {value} = e.target
        // console.log(value)
        setQuery(value)
    }

    const handleAdd = () => {
        const payload = {
            title: query,
            status: false
        }

        let newTasks = [...tasks, payload]
        setTasks(newTasks)
    }
    return(
        <div>
            <h2>Tasks</h2>
            <div>
                <input 
                type="text" 
                value={query} 
                onChange={handleChange} 
                placeholder="Enter Something"
                />

                <button onClick={handleAdd}>Add</button>

            </div>

            <div>
                { tasks.map(item => {
                    return <TaskItem 
                    title = {item.title} 
                    status = {item.status} 
                    
                    />
                }) }
            </div>
        </div>
    )

}




export default Task