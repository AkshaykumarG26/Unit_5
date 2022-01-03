import { useEffect, useState } from 'react';



export const From = () => {
    // useEffect can not be async .... effects call backs are syncronous .... u can write async inside useeffect

    const [counter, setCounter] = useState(0)
    // useEffect(() => {

    // })

    return (
        <div >
            <input type="text" name="" id="" />
            <h1>Counter: { counter }</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>)
}