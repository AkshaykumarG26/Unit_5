
import './App.css';
import { Children } from 'react';
import { ParentToChild } from './Components/ParentToChild';
import { ChildToParent } from './Components/ChildToParent';
import { Siblings } from './Components/Siblings';
import { Todo } from './Components/Todo';

function App() {
  return (
    <div className="App">
      <h1>State Uplifting</h1>
      <ParentToChild/>
      <ChildToParent/>
      {/* <Siblings/> */}
      
      <br /><br />
      <h1>ToDo</h1>
      <Todo/>
    </div>
  );
}

export default App;
