
import "./App.css";
import { ConditionalRendering } from "./Components/ConditionalRendering";
import { Form } from './Components/Forms'


function App() {
  

  return (
    <div className="App">
      <Form />
      <br />
      <br />
      <h1>COnditonal Rendering</h1>
      <ConditionalRendering />
    </div>
  );
}

export default App;

