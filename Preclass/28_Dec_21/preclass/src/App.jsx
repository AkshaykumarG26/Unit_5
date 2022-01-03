import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const initState = {
  name: "",
  email: "",
  age: ''
}

function App() {

  const [data, setData] = useState(initState)

  
  const handleChange = e => {
    const {name, value} = e.target
    setData({ ...data, [name]: value})
  }

  const handleClick = () => {
    console.log(data)
  }

  const {name, email, age} = data
  
  return (
    <div className="App">
      <h2>Events, UseRef, Forms and more</h2>
      <input type="text" value={name} name='name' onChange={handleChange} placeholder='Name' />
      <br />
      <input type="text" value={email} name='email' onChange={handleChange} placeholder='Email' />
      <br />
      <input type="text" value={age} name='age' onChange={handleChange} placeholder='Age' />
      <br />
      <button onClick = {handleClick}>Click Me</button>
    </div>
  );
}

export default App;
