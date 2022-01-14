import './App.css';

import styled from 'styled-components';
import NavBar from './Components/NavBar';

const Wraper = styled.div`

  h2{
    color: blue;
  }

  color: red;
  padding: 2rem;
  border: 2px solid black  
`

const A = styled.a`
  text-decoration: none;
  font-size: 30px
  target: _blank;

  color: ${(props) => (props.color === "red" ? "red" : "aqua" )}
`

function App() {
  return (
    <div className="App">
      <Wraper>
        <A color='red' href='https://www.google.com'>Goto Google.com</A>
        <h1>Hello World</h1>
        <h2>This is for color checking </h2>
      </Wraper>
      <br /><hr /><br />
      <NavBar/>
    </div>
  );
}

export default App;
