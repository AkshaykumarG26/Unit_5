import React from "react";
import { useState } from "react";
const initState = {
    name: "",
    email: "",
    age: ''
  }
  

export const Form = () => {
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
      <>
    <h2>Events, UseRef, Forms and more</h2>
    <input type="text" value={name} name="name" id="" onChange={handleChange} />
    <br />
    <input type="text" value={email} name="email" id="" onChange={handleChange} />
    <br />
    <input type="text" value={age} name="age" id="" onChange={handleChange}/>
    <br />
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}