import React from "react";
import { useState } from "react";


const Child = ({value}) => (
    <div>
        <h3>Count is : { value }</h3>
    </div>
);


const Button = ({handleClick, label}) => {
    <button onClick={handleClick}>{label}</button>
}

function  Siblings() {

    const [count, setCount] = useState(0)

    const handleChange = (value) => {
        setCount(count + value)
    }

    return(
        <>
            <h2>Siblings</h2>
            <Child 
                value={count}
                handleIncrement = {() => handleChange(+1)}
                handleDecrement = {() => handleChange(-1)}
            />

            <Button label="+" handleClick = {() => handleChange(1)} />
            <Button label="-" handleClick = {() => handleChange(-1)} />

        </>
    )
}


export { Siblings }