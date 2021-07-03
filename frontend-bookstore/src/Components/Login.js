import React from "react";

function Login(props) {
  return (
    <div>
      <div id="signInBox">
        <h4>Username</h4>
        <input type="text"></input>
        <h4>Password</h4>
        <input type="text"></input>
        <br></br>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
