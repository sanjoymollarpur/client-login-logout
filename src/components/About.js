import React, { useEffect, useState } from 'react';



function About() {
  const [user, setUser]= useState("");
  const callAboutPage = async()=>{
    try{
      const res = await fetch("/about",{
        method:"GET",
        headers:{
          Accept: "appliaction/json",
          "Content-Type": "appliaction/json"
        },
        credentials:"include"
      });
      const data = await res.json();
       //console.log(data);
       setUser(data);
       if(data.status!==200)
       {
        throw new Error('User not Found');
       }
       
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    callAboutPage();
  },[]);
 // console.log(user);
  return (
    <div>
      <div className="about-con">
        <div className="about-entry">
          User Id: {user._id}
        </div>
        <div className="about-entry">
          Name: {user.name}
        </div>
        <div className="about-entry">
          Email: {user.email}
        </div>
        <div className="about-entry">
          Phone: {user.phone}
        </div>
        <div className="about-entry">
          Profession:{user.work}
        </div>
        
      </div>
    </div>
  );
}

export default About;