import React from 'react'
import './Sign_up.css'   
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";




export const Student = () => {
    

    return (
        <div>
        <div className="header123">
        
        <div className="logo-img">
        <Link to='HomePage'><img src="Images/logo.png" className='logo1'/></Link>        </div>
        
        <div  className="Language"><IoLanguage/>
        <select name="Language" className="Eng12">  
                   <option value=""> English(IND)</option>
                   
                     
               </select>
               </div>      
        </div>
        <div className="sign-up-body583458">
          <div>
            <h1 className="Title123">Sign up</h1>
            <h3 className="Subtitle223">Welcome, Friends of Animal missed you!</h3>
          </div>
            
            <div className='options5mx0'>
              <Link to='/Volunteer'style={{ textDecoration: 'none' }}><p className="Volunteer79sbh">Volunteer</p></Link>
              <Link to='/Student_one'style={{ textDecoration: 'none' }}><p className="Volunteer79sbh">Student</p></Link>
              <Link to='/Shelter'style={{ textDecoration: 'none' }}><p className="Volunteer79sbh">NGO / Animal Shelter</p></Link>
              <Link to='/Rescue'style={{ textDecoration: 'none' }}><p className="Volunteer79sbh">Animal Rescuer</p></Link>
            </div>
            <p className="acc2358435">Already have an account <a href="Login" className="signup123">Sign In</a></p>

        </div>
        </div>
    )
}
export default Student;