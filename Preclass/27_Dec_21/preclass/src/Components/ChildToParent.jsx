import React, { useState } from "react";

const Child = ({value, handleIncrement, handleDecrement, handleReset}) => (
    <div>
        <h3>Count is : { value }</h3>
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>0</button>
        </div>
    </div>
)


function  ChildToParent() {

    const [count, setCount] = useState(0)

    const handleChange = (value) => {
        setCount(count + value)
    }

    return(
        <div>
            <h2>Child To Parent</h2>
            <Child 
                value={count}
                handleIncrement = {() => handleChange(+1)}
                handleDecrement = {() => handleChange(-1)}
                handleReset = {() => handleChange(-count)}
            />
        </div>
    )
}


export {ChildToParent}