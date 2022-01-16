import { Link } from "react-router-dom"



export const Users = () => {
    return (
      <div>
        {[1, 2, 3, 4].map((user) => (
          <div style={{margin: '10px'}}>
            <Link to={`/users/${user}`}>User {user}</Link>
          </div>
        ))}
      </div>
    );
}
