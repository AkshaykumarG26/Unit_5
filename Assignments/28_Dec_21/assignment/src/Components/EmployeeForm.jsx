// import React, { useState } from "react";
import { useState } from "react";

export const FormData = () => {
  const [form, setForm] = useState({
    Name: "",
    Age: "",
    Address: "",
    Department: "",
    Salary: "",
    Marital_Status: "",
  });
  // above lines are not compelsary to add here it is good to add these lines

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="Name"
        id=""
        placeholder="Name"
      />
      <br />
      <input
        type="number"
        onChange={handleChange}
        name="Age"
        id=""
        placeholder="Age"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        name="Address"
        id=""
        placeholder="Address"
      />
      <br />
      <select name="Department" id="">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      {/* <input
        type="text"
        onChange={handleChange}
        name="Department"
        id=""
        placeholder="Department"
      />
      <br /> */}
      <input
        type="number"
        onChange={handleChange}
        name="Salary"
        id=""
        placeholder="Salary"
      />
      <br />
      <input
        type="text"
        onChange={handleChange}
        name="Marital_Status"
        id=""
        placeholder="marital status"
      />
      <br />
      <input type="submit" name="" id="" />
    </form>
  );
};
