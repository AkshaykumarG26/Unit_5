import logo from './logo.svg';
import './App.css';

function App() {
  
  const hello = "Welcome to React";
  return (
    <div className="App">
      
      <h1 style={{
    color: "red",
    fontSize: "50px"
  }}>Heading 1</h1>
      <img src={ logo } alt=""  width={400}/>

      <h1>{hello}</h1>
      <h1>{1+2}</h1>

      <h2>{[1,2,3,4,5].map(e => `hello${e} `)}</h2>

      <h2>{[1,2,3,4,5].map(e => 
          <h1>Hello {e}</h1>
        )}</h2>
        <h1>
          
        </h1>
        
        < CustomFunction />
    </div>
  );
}

function CustomFunction(){

  return <h1>this is ur custom function</h1>
}

export default App;
