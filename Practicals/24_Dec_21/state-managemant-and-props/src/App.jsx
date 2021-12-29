// import logo from './logo.svg';
import './App.css';



import Todos from './components/Todo';

function App() {

  const arr = ["learn react", "learn mongo", 'learn dsa']

  return (
    <div className="App">

      {
        arr.map((e) => (
          <Todos num={e}>
            <h1>Test</h1>
          </Todos>
        ))
      }

    </div>
  );
}

export default App;



// vdo stopped at 1:04