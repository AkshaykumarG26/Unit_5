import React, { useEffect, useState } from "react";

function  TodoInput({onClick}) {

    const [title, setTitle] = useState("")

    const handleAdd = () => {

    }

    return (
        <div>
            <input type="text" 
            placeholder="add Something" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="" 
            id="" 
            />
            <button onClick={() => onClick(title)}>Add</button>
        </div>
    )
    
}


export {TodoInput}