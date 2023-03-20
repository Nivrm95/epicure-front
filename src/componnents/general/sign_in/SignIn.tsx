import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/nav_bar/NavBar";
import TextInput from "../input/TextInput";
import axios from "axios";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../store/slices/userSlice";

const SignIn: React.FC = () => {
  const navigat = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser({ email: email }));
  }, [email]);

  const emptyInputs = () => {
    setEmail("");
    setPassword("");
  };
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogIn = async (e: any) => {
    e.preventDefault();
    const credentials: any = {
      email: email,
      password: password,
    };
    try {
      const { data } = await axios.post(
        // "https://niv-epicure-back.onrender.com/users/login",
        "http://localhost:8000/users/login",
        credentials
      );
      navigat("/");
    } catch (err: any) {
      console.log(err);
      alert(err.response.data);
      emptyInputs();
    }
  };

  return (
    <div>
      <NavBar />
      <div className="sing-in-container">
        <div className="sing-in-card">
          <div className="sing-in-title-box">
            <div className="sing-in-title">Sign In</div>
            <div className="sing-in-title-text">
              To continue the order, please sign in
            </div>
          </div>
          <form className="sing-in-form" onSubmit={handleLogIn}>
            <TextInput
              label={"Email adress"}
              value={email}
              onChange={handleEmailInputChange}
            />
            <TextInput
              label={"Password"}
              type={"password"}
              value={password}
              onChange={handlePasswordInputChange}
            />
            <button className="login-btu" type="submit">
              login
            </button>
            <button className="forget-btu"> Forget password?</button>
            <div className="or">
              <hr className="sing-in-hr" />
              <p>or</p>
              <hr className="sing-in-hr" />
            </div>
            <button className="sign-up-btu" onClick={() => navigat("/SignUp")}>
              sign up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
