
import React, { useState, useEffect } from "react";
import './login.css'

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {toast} from "react-toastify";
import { register } from "../redux/feature/authSlice";

const initialState = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:""
}


const Register = () => {
  const [formValue, setFormValue] = useState(initialState);

  const {loading, error} = useSelector((state)=>({...state.auth}));



  const {email, password, firstName, lastName, confirmPassword} = formValue;
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
   error && toast.error(error);
  },[error])
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== confirmPassword){
        return toast.error("Password does not match")
      }
      if(email && password && firstName && lastName && confirmPassword){
        dispatch(register({formValue, navigate, toast}));
       
      }
  }

  const onInputChange = (e) => {
       let {name, value} = e.target;

       setFormValue({...formValue,[name]:value })
  }
  return (
    <div className="body">
    <div className="wrapper">
     <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input 
            type="text"
             placeholder="First Name"
              value={firstName}
               name="firstName"
               onChange={onInputChange} 
               required
               invalid
                />
                
          </div>
          <div className="input-box">
            <input 
            type="text"
             placeholder="Last Name"
              value={lastName}
               name="lastName"
               onChange={onInputChange} 
               required
               invalid
                />
                
          </div>
          <div className="input-box">
            <input type="email"
             placeholder="Email"
              value={email}
               name="email"
               onChange={onInputChange} 
               required
               invalid
               validation="Please provide your email"


                />
                <i class='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password"
             placeholder="Password"
              value={password}
               name="password"
               onChange={onInputChange} 
               required
               invalid
               validation="Please provide your password"
                />
                <i class='bx bxs-lock-alt' ></i>
          </div>
          <div className="input-box">
            <input type="password"
             placeholder="Confirm Password"
              value={confirmPassword}
               name="confirmPassword"
               onChange={onInputChange} 
               required
               invalid
               validation="Please provide your confirm password"
                />
                <i class='bx bxs-lock-alt' ></i>
          </div>
          <button type="subit" className="btn">Register</button>
         <div className="register-link">
         <Link to="/login">
          <p>Already have an account ? Login</p>
          </Link>
         </div>
     </form>
    </div>
    </div>
  )
}

export default Register
