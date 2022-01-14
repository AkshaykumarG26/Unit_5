
import './App.css';
import { From } from './components/Form';
import { Todo } from './components/Todo';
import { Timer } from './components/Timer'
import { useState } from 'react';
function App() {


  // this is for counter 
  const [show, setShow] = useState(true)
  
  return (
    <div className="App">
      <From/>
      <br /><hr /><br />
      {/* to see this output run json server using json.server db.json port 3001 --watch */}
      <Todo/>
      <br /><hr /><br />
      {show ? <Timer/>: null}
      <button onClick={() => setShow(!show)}>{show ? "Hide": "Show"}</button>
    </div>
  );
  
}

export default App;
