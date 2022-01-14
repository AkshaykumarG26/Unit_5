import "./App.css";
import { Button } from './styled/Button'

function App() {
  return (
    <div className="App">
      Hello React
      <br />
      <br />
      <Button
        onClick={() => {
          alert(" Button Clicked");
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
