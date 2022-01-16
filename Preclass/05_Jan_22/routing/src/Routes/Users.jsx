import { Link } from "react-router-dom";

import axios from 'axios'
import { useEffect, useState } from "react";

export const Users = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchUsers = () => {

        setIsLoading(true)
        axios.get("https://reqres.in/api/users").then(res=> {
            setUsers(res.data.data)
            setIsLoading(false)
        }).catch(err=> {
            console.log("erros", err)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchUsers()
    },[])


  return isLoading? <div>....loading</div>: (
    <>
      <h3>Users Page</h3>
      {users.map(user => (
          <div style={{padding: "3px"}}>

        <Link to={`/users/${user.id}`}>{`${user.first_name} ${user.last_name}`}</Link>
          </div>
      ))}
    </>
  );
};
