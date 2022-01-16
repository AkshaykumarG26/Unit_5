import { useContext, useState } from "react"
import { AuthContext } from "../Contexts/Auth";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {

    const [form, setForm] = useState({})

    const {handleToken} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value,
        })
    }
    return (
      <div>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          id=""
          placeholder="Enter Email"
        />
        <input
          type="text"
          onChange={handleChange}
          name="password"
          id=""
          placeholder="Enter Password"
        />
        <button onClick={() => {
            handleToken("282982")
            navigate('/users')
        }}>Login In</button>
      </div>
    );
}