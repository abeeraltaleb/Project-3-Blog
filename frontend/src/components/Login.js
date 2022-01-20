import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loginStatus, setLoginStatus] = useState(0);
const [loginMessage, setLoginMessage] = useState("");

// 200 ||  400 ||  404

const loginFunc = (e) => {
    e.preventDefault();
    const userInfo = {
      // "email":email
      email,
      password,
    };
    axios
      .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        setLoginStatus(response.status);
        setLoginMessage(response.data.message);
        // console.log("DATA: ", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        // console.log("ERR: ", err);
        setLoginStatus(err.response.status);
        setLoginMessage(err.response.data.message);
        props.setIsLoggedIn(false);
        props.setUsername(null);
      });
  };

  return (
    <div className="m-3 Login d-flex justify-content-center">
      <form className="d-grid gap-3">
        <div className="form-floating ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            // placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            // placeholder="Write password here ..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        {loginStatus === 200 && (
          <div className="alert alert-success text-center" role="alert">
            {loginMessage}
          </div>
        )}

        {(loginStatus === 400 || loginStatus === 404) && (
          <div className="alert alert-danger text-center" role="alert">
            {loginMessage}
          </div>
        )}

        <div className="text-center">
          <input
            type="submit"
            value="Login"
            onClick={loginFunc}
            className="btn btn-primary"
          />

          <Link to="/Register" className="btn btn-link">
            Don't Have An Account?
          </Link>
        </div>
      </form>
    </div>
  );
}
