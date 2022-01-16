import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/Auth"

export const PrivetRoute = ({children}) => {
    const {token} = useContext(AuthContext)

    if (!token) {
        <Navigate to={'/login'}/>
    }

    return children
}