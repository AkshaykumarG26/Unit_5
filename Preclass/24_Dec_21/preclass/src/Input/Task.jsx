import React, { useState } from "react";

function Task() {

    const [query, setQuery] = useState("")

    const handleChange = (e) => {
        setQuery(value)
    }
    return(
        <div>
            <h2>Tasks</h2>
            <div>
                <input type="text" value={query} onChange={handleChange} placeholder="Enter Something"/>
            </div>
        </div>
    )

}


export default Task