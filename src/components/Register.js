import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';



function Register() {
  //const history = useHistory();
  const [user, setUser]=useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
  });
  const handleInput=(e)=>{
       const {name, value}=e.target;
        setUser({
            ...user,
            [name]:value
          }
        );
  }
  const postData=async(e)=>{
     e.preventDefault();
    const {name, email, phone, work, password, cpassword}= user;
    console.log(name, email, phone, work, password, cpassword);
    const res= await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
       
    const res1 =await res.json();
    console.log(res1+"error");
    if(res1.status === 422 || !res1){
        window.alert("Invalid Registration");
        console.log("Invalid registration");
    }else{
      window.alert("Successful Registration");
      console.log("Successful registration");
     // history.push('/siginin');
    }
    
    }
  return (
    <div className="reg-form">
        <h1>Register</h1>
<form class="mb-3" method="POST">
  

  <input value={user.name} onChange={handleInput} type="text" name="name"  class="form-control mb-1" id="exampleFormControlInput1" placeholder="Enter your name"/>
  <input value={user.email} onChange={handleInput} type="email" name="email" class="form-control mb-1" id="exampleFormControlInput2" placeholder="Enter your email"/>
  <input value={user.phone} onChange={handleInput} type="number" name="phone" class="form-control mb-1" id="exampleFormControlInput3" placeholder="Enter your phone number"/>
  <input value={user.work} onChange={handleInput} type="text" name="work" class="form-control mb-1" id="exampleFormControlInput4" placeholder="Enter your job role"/>
  <input value={user.password} onChange={handleInput} type="password" name="password" class="form-control mb-1" id="exampleFormControlInput5" placeholder="Choose password"/>
  <input value={user.cpassword} onChange={handleInput} type="password" name="cpassword" class="form-control mb-1" id="exampleFormControlInput6" placeholder="Conform password"/>
  <button type="submit" onClick={postData} className="btn btn-dark"> Register</button>
</form>

    </div>
  );
}

export default Register;