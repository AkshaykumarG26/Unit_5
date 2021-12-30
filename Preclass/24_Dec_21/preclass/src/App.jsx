
import './App.css';
import { useState } from 'react';
import Counter from './counter/Counter';
import Task from './Input/Task';

function App() {

  return (
    <div className="App">
      <Counter />
      <br /><br />
      <Task />
    </div>
  );
}

export default App;
