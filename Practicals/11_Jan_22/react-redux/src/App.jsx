import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { incCounter, decCounter } from './store/actions';


function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={() => {
        dispatch(incCounter(1))
      }}>Inc Counter</button>
      <button onClick={() => {
        dispatch(decCounter(1))
      }}>Dec Counter</button>
    </div>

  );
}

export default App;
