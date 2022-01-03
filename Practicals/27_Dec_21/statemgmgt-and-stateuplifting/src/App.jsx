
import './App.css';
import { Child1 } from './Components/Child1';
import { Child2 } from './Components/CHild2';
import { useState } from 'react';

import { Todo } from './Components/Todo';

function App() {

  const [data, setData] = useState("")

  const handleData = (name) => {
    setData(name)
  }

  return (
    <div className="App">
      <div>
      <h3>Parent</h3>
      <h3>Parent Received</h3>
      <Child1 handleData = {handleData}/>
      <Child2 data = {data}/>
      <br /><br />
      </div>

      <div>
        <h1>ToDo </h1>
        <Todo />
      </div>


    </div>
  );
}

export default App;
