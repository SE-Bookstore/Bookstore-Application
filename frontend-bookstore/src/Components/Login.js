import React, {useRef} from "react";

function Login(props) {

  let userField= useRef()
  let passField= useRef()

  const handleLogin = ()=>{
    let credentials= {
      userName:userField.current.value,
      passWord:passField.current.value
      //create a field for device id
    }
    console.log(credentials);
  }

  return (
    <div>
      <div id="signInBox">
        <h4>Username</h4>
        <input ref={userField} type="text"></input>
        <h4>Password</h4>
        <input ref={passField} type="text"></input>
        <br></br>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
