import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    // Logic đăng ký sẽ xử lý sau
  };

  return (
    <div className="register_container" style={{ width: "50%" }}>
      <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <span className="text" style={{ flexGrow: "1" }}>SignUp</span>
        <div className="flex-grow-1"></div>
        <hr />
      </div>
      <form onSubmit={register}>
        <div className="inputs">
          <div className="input">
            <input type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
          </div>
          <div className="input">
            <input type="text" name="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="input">
            <input type="text" name="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="input">
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input">
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="submit_panel">
          <button className="submit" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;