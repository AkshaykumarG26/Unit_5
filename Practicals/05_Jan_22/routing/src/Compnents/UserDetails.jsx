import { useContext, useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/Auth"

export const UserDetails = () => {
    const {userId}  = useParams()

    const [user, setUser] = useState({})

    const {token} = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`).then(d => d.json()).then(d => {
            setUser(d.data)
        })
    },[userId])

    if (!token){
        return <Navigate to={"/login"} />;
    }

    return <div>
        <img src={user.avatar} alt="" />
        <div>
        {user.first_name} {user.last_name}
        </div>
        <div>

        Contact: {user.email}
        </div>
    </div>
}