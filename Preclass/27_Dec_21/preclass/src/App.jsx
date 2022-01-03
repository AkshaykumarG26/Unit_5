
import './App.css';
import { Children } from 'react';
import { ParentToChild } from './Components/ParentToChild';
import { ChildToParent } from './Components/ChildToParent';
import { Siblings } from './Components/Siblings';

function App() {
  return (
    <div className="App">
      <h1>State Uplifting</h1>
      <ParentToChild/>
      <ChildToParent/>
      <Siblings/>
    </div>
  );
}

export default App;
