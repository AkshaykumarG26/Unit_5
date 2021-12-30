import { useState } from 'react';



function Counter(){
// const [data, setData] = useState(initial value)
  // if u do not put any value it always be undefined so it is good to put inital value
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const Decrement = () => {
    setCount(count-1)
  }

  const Double = () => {
    setCount(count*2)
  }

  const Reset = () => {
    setCount(0)
  }

  return (
    <>
        <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Double}>Double</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}


export default Counter