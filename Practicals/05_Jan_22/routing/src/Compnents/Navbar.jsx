import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/users"}>Users</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};
