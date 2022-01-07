import { useState } from 'react';

function Counter() {

  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    if (value === 2){
      setCounter( counter * value)
    }else{

      setCounter(counter + value)
    }
  }

  return (
    <>
      <h2>Counter</h2>
      <h2>{counter}</h2>
      <button onClick={() => handleCounter(1)}>Increment</button>
      <button onClick={() => handleCounter(-1)}>Decrement</button>
      <button onClick={() => handleCounter(2)}>Double</button>
      <button onClick={() => handleCounter(-counter)}>Reset</button>
    </>
  );
}

export default Counter;
