import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const history = useHistory();

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, pw)
      .then(() => history.push("/"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signup-cont">
      <div className="navs">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
          alt="NETFLIX LOGO"
        />
      </div>
      <div className="log">
        <h1>Sign In</h1>
        <div className="inps">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            required
          />
          <button onClick={login}>Sign In</button>

          <p>
            New to Netflix? <Link to="/">Sign up now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
