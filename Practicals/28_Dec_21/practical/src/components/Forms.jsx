import { useState } from "react"

export const Form = () => {

    const [form, setForm] = useState({
        userName: "",
        age: ""
    })


    const handleChange = (e) => {
        // console.log(e.target.name)
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }


    return <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="userName" id="" placeholder="Enter Name"/>
        <input onChange={handleChange} type="number" name="age" id="" placeholder="Enter Age"/>
        <input type="submit" name="" id="" />
    </form>
}