import logo from './logo.svg';
import './App.css';
import { From } from './components/Form';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <From/>
      <br /><br />
      <Todo/>
    </div>
  );
}

export default App;
