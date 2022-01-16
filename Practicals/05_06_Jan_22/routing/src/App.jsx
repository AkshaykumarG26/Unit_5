import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./Compnents/Home";
import { About } from "./Compnents/About";
import { Contact } from "./Compnents/Contact";
import { Navbar } from "./Compnents/Navbar";
import { Users } from "./Compnents/Users";
import { UserDetails } from "./Compnents/UserDetails";
import { Login } from "./Compnents/Login";
import { PrivetRoute } from "./Compnents/PrivateRoute";

function App() {
  return (
    <div className="App">
      <div style={{ border: "2px solid black" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/users"
            element={
              <PrivetRoute>
                <Users />
              </PrivetRoute>
            }
          ></Route>

          <Route
            path="/users/:userId"
            element={
              <PrivetRoute>
                <UserDetails />
              </PrivetRoute>
            }
          ></Route>
          <Route path="/*" element={<div>404 page not found</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
