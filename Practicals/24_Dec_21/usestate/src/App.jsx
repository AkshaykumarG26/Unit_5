
import { useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState(initial value)
  // if u do not put any value it always be undefined so it is good to put inital value
  const [count1, setCount1] = useState(0)

  const increment = () => {
    setCount1(count1+1)
  }

  const Decrement = () => {
    setCount1(count1-1)
  }

  const Double = () => {
    setCount1(count1*2)
  }

  const Reset = () => {
    setCount1(0)
  }


  const [count2, setCount2] = useState(0)

  const changeCount = (value) => {
      setCount2(count2 + value);
  }

  


  // conditional rendering
  // this  function is used to hide the buttons after counter reaching some value
  const [count3, setCount3] = useState(0)

  const clrBtns = (value) => {
    if (count3 < 10){
      setCount3(count3 + value)
    }
  }

  // or
  const [count4, setCount4] = useState(0)

  const renderNewThing = (value) => {
    setCount4(count4 + value);
  }

  if (count4 === 10){
    return <div><h1>Counter 4 reacehd to max value thats why it renders entire new thing on page</h1></div>
  }



  return (
    <div className="App">
      <h4>This is for 3 differernt functions</h4>
        <h3>Counter 1 : {count1}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Double}>Double</button>
      <button onClick={Reset}>Reset</button>
      <br /><br /><br />


      <h4>This is for only one function</h4>
      <h3>Countrer 2 : {count2}</h3>
      <button onClick={() => changeCount(+1)}>Increment</button>
      <button onClick={() => changeCount(-1)}>Decrement</button>
      <button onClick={() => changeCount(-count2)}>Reset</button>
      <br /><br />
      <div>Counter is {count2 % 2 === 0 ? "Even": "Odd"}</div>
      
      <br /><br /><br />

{/* conditional rendering */}
      <h4>This is to hide the buttons afetr it met criteria</h4>
      <h3>Counter 3 : {count3}</h3>
      {count3 < 10 && (
        <div>
          <button onClick={() => clrBtns(1)}>Increment</button>
          <button onClick={() => clrBtns(-1)}>Decrement</button>
        </div>
        
      )}

      <br />

      <h5>Or</h5>
      <br />


      <h3>Counter 4 : {count4}</h3>
      <div>
          <button onClick={() => renderNewThing(1)}>Increment</button>
          <button onClick={() => renderNewThing(-1)}>Decrement</button>
        </div>





    </div>
    
  );
}

export default App;
