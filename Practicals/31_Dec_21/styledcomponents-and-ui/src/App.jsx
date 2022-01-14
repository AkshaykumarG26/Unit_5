import { useState } from "react";
import "./App.css";
import { Button } from './styled/Button';

import { DatePicker } from "antd"

function App() {

  const [theme, setTheme] = useState("light")


  return (
    <div className="App">
      Hello React
      <br />
      <br />
      <Button
      theme = {theme}
        onClick={() => {
          alert(" Button Clicked");
        }}
      >
        Click Me
      </Button>
        
      <button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}>Toggle Theme</button>

      <br /><hr /><br />

      <DatePicker/>
    </div>
  );
}

export default App;
