import React, { Children, useState } from "react";


const Child = ({value}) => <h3>Count is : {value}</h3>

function ParentToChild(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>Parent To Child</h2>
            <Child value={count}/>
            <button onClick={() => setCount(count + 1) }>+</button>
            <button onClick={() => setCount(count - 1) }>-</button>
        </div>
    )
}


export {ParentToChild}