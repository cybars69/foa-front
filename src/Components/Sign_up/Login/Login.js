import React, { Component, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import foaLogo from "./foaLogo.svg";
// import { render } from "@testing-library/react";


//   constructor() {
//     super();
//     this.state = {
//       showPassword: false,
//     };
//   }

  function Login() {
    const [visible, setVisiblity] = useState(false);
    const [email4, setEmail4] = useState("");
    const [password4, setPassword4] = useState("");
    const formHandler4=(e)=>{
      e.preventDefault();
      if (email4==='' || password4===''){
          alert('Please fill in all fields')
     }else{
          alert(`Welcome ${email4}`)
          setEmail4('')
          setPassword4('')

      }
  }
    return (
      <div className="page1">
        <div class="login">
          <Link to='HomePage'>
            <img
              class="login__logo1"
              src={foaLogo}
              alt=""
              className="login__logo1"
            />
          </Link>

          <div class="login__container">
            <h1>Sign in to your account</h1>

            <form id="login" onSubmit={formHandler4}>
              <h4>Email</h4>
              <input class="input_Email1" type="email" value={email4} onChange={(e)=>{setEmail4(e.target.value)}}  placeholder=""  required/>
              <h4>Password</h4>
              <input
                class="input_Password1"
                type={visible ? "text" : "password"}
                value={password4} onChange={(e)=>{setPassword4(e.target.value)}}
                name="password"
                id="password"
                placeholder=""
                required
              />
              <i
                className="BsFillEyeFill2"
                onClick={() => setVisiblity(visiblity => !visiblity)}>
                
                {visible ? (
                  <BsFillEyeSlashFill />
                ) : (
                  <BsFillEyeFill />
                )}
              </i>
             
              
            </form>

            {/* <input class="check_remember" type="checkbox" />
            <small class="rememberMe">
                Remember Me
             </small> */}
            <a class="forgot_Password1" href="#">
              Forgot password?
            </a>
            <button type="submit" class="login__signInButton1" form="login">
              <p>Sign In</p>
            </button>

            
            <p>
              Dont have an account ?{" "}
              <Link to='Student'>
                <a class="signUp2" href="#">
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Login