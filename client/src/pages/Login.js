
import React, { useState, useEffect } from "react";
import {
   MDBBtn, MDBIcon,
} from "mdb-react-ui-kit";
import './login.css'

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {toast} from "react-toastify";
import { login } from "../redux/feature/authSlice";

import {GoogleLogin} from "react-google-login";


const initialState = {
  email:"",
  password:""
}


const Login = () => {
  const [formValue, setFormValue] = useState(initialState);

  const {loading, error} = useSelector((state)=>({...state.auth}));

  const {email, password} = formValue;
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
   error && toast.error(error);
  },[error])

  const handleSubmit = (e) => {
      e.preventDefault();
      if(email && password){
        dispatch(login({formValue, navigate, toast}));
       
      }
  }

  const onInputChange = (e) => {
       let {name, value} = e.target;

       setFormValue({...formValue,[name]:value })
  }
  const googleSuccess = () => {

  }
  const googleFailure = () => {

  }
  return (
    <div className="body">
    <div className="wrapper">
     <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <br/>
          <button type="submit" className="btn">Login</button>
          <GoogleLogin
            clientId="Your Client Id"
            render={(renderProps) => (
              <MDBBtn className="gbtn"
                
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon className="me-2" fab icon="google" /> Google Sign In
              </MDBBtn>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
      
         <div className="register-link">
         <Link to="/register">
          <p>Don't have an account ? Register</p>
          </Link>
         </div>
     </form>
    </div>
    </div>
  )
}

export default Login
