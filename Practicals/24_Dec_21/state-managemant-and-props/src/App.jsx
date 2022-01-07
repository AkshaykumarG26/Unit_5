import './App.css';



import Todos from './components/Todo';

function App() {

  const arr = ["learn react", "learn mongo", 'learn dsa']

  return (
    <div className="App">

      {
        arr.map((e) => (
          <Todos children={e}>
            
          </Todos>
        ))
      }


    </div>
  );
}

export default App;



