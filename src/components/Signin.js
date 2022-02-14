import React, { useState } from 'react';

//import {useHistory} from 'react-router-dom'

function Signin() {
  
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  //const history= useHistory();
  const loginUser=async(e)=>{
    e.preventDefault();
    const res =await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
         email, password
      })
    });
    const data = res.json();
  if(res.status===400 || !data)
  {
    window.alert("error");
  }else{
    window.alert("Login successful");
    //history.push('/')
  }
  setEmail("");
  setPassword("");
  }
  return (
    <div className="reg-form">
        <h1>Sign In</h1>
<form className="mb-3">
  
  
  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control mb-1" id="exampleFormControlInput2" placeholder="Enter your email"/>
  
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" className="form-control mb-1" id="exampleFormControlInput5" placeholder="Enter password"/>
  
   <button type="submit" onClick={loginUser} className="btn btn-dark"> Sign In</button>
</form>

    </div>
  );
}

export default Signin;