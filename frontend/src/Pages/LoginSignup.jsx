import React, { useState } from 'react'
import './CSS/loginSignup.css'

const LoginSignup = () => {

  const [state,setState] = useState("Login");

  const[formData, setFormData] = useState({
      username: "" ,
      password : "",
      email : ""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }



    const login = async() => {
      console.log("Successfully Logged In", formData);
      let responseData;
      await fetch('http://localhost:4000/login', {
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data);

      if(responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
        
    }
    const signup  = async() => {
      console.log("Successfully Signed Up", formData);
      let responseData;
      await fetch('http://localhost:4000/signup', {
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data);

      if(responseData.success) {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
    }
    

  

  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === "Sign Up" ? <input name='username'value={formData.username} onChange={changeHandler} type="text" placeholder='Enter your name' /> : <></>}
          <input name='email'value={formData.email} onChange={changeHandler} type="email" placeholder='Enter your email address' />
          <input name='password'value={formData.password} onChange={changeHandler} type="passwords" placeholder='Enter your password' />
        </div>
        <button onClick={()=>{state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" ? 
          <p className='loginSignup-login'>Alreadry have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p> :
          <p className='loginSignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p> 
        }
        <div className="loginSignup-agree">
          <p> <input type="checkbox" name="" id="" /> I agree the terms and conditions of the privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
