import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/nav_bar/NavBar";
import TextInput from "../input/TextInput";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const roleOptions = [
  { value: "normal", label: "Normal User" },
  { value: "admin", label: "Admin" },
  { value: "restaurant_manager", label: "Restaurant Manager" },
];

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState({
    value: "",
    label: "Select Role",
  });

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      role: selectedRole.value, 
    };

    console.log(selectedRole.value);
    
    try {
     await axios.post("http://localhost:8000/users", body).then(res=>console.log(res.data));
      navigate(-1);
    } catch (err: any) {
      console.log(err);
      alert(err.response.data);
      setfirstName("");
      setLastName("");
      setEmail("");
      setUserName("");
      setPassword("");
    }
  };

  const inputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirstName(e.target.value);
  };
  const inputLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const inputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const inputUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (selectedOption: any) => {
    setSelectedRole(selectedOption);
  };


  
  return (
    <div>
      <NavBar />
      <div className="sing-in-container">
        <div className="sing-in-card">
          <div className="sing-in-title-box">
            <div className="sing-in-title">Sign Up</div>
            <div className="sing-in-title-text">
              Create a free account or <NavLink to={"/SingIn"}>sign in</NavLink>
            </div>
          </div>
          <form onSubmit={handleSignUp}>
            <TextInput
              label="First Name"
              onChange={inputNameChange}
              value={firstName}
            />
            <TextInput
              label="Last Name"
              onChange={inputLastNameChange}
              value={lastName}
            />
            <TextInput
              label="Email"
              onChange={inputEmailChange}
              value={email}
              type="email"
            />
            <TextInput
              label="Username"
              onChange={inputUserNameChange}
              value={userName}
            />
            <TextInput
              label="Password"
              onChange={inputPasswordChange}
              value={password}
              type="password"
            />
            <Select
              options={roleOptions}
              value={selectedRole}
              onChange={handleRoleChange}
              placeholder="Select your role"
            />
          </form>
          <div className="checkbox">
            <input type="checkbox" />
            <div>Don't want to receive updates and promotions by email.</div>
          </div>
          <button className="sign-up-btu" onClick={handleSignUp}>
            sign up
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
