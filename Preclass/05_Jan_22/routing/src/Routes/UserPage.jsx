import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();


  const getUserDetails = () => {
      setIsLoading(true)
    axios.get(`https://reqres.in/api/user/${id}`).then(res=> {
        setUser(res.data.data)
        setIsLoading(false)
    }).catch(err => {
        console.log("error", err)
        setIsLoading(false)
    })
  };

  useEffect(() => {
      getUserDetails()
  },[])

  return isLoading? <div>...loading</div>:  (
    
      <div style={{display:"flex", justifyContent:"center"}}>
            <h3>{`${user.name} ${user.year }`}</h3>

      </div>
    
  );
};
