import React,{useState} from 'react'
import './Sign_up.css'
import { VscAccount } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import { FaTransgender } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TiMessageTyping } from "react-icons/ti";
import { GiDirectionSigns } from "react-icons/gi";        
import { IoLanguage } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiUserCheck } from "react-icons/bi";


export const Volunteer = () => {
    const [fullName2, setFullName2] = useState("");
    const [collegeName2, setCollegeName2] = useState("");
    const [email2, setEmail2] = useState("");
    const [password2, setPassword2] = useState("");
    const [birthdate2, setBirthdate2] = useState("");
    const [gender2, setGender2] = useState("");
    const [mobileNO2, setMobileNO2] = useState("");
    const [otp2, setotp2] = useState("");
    const [address2, setAddress2] = useState("");
    const [profession2, setProfession2] = useState("");
    const [alsoHelp2, setAlsoHelp2] = useState("");

    const formHandler2=(e)=>{
        e.preventDefault();
        if (fullName2==='' || collegeName2==='' || email2==='' || password2==='' || birthdate2==='' || gender2==='' || mobileNO2===''|| otp2===''|| address2===''|| profession2===''|| alsoHelp2===''){
            alert('Please fill in all fields')
       }else{
            alert(`Welcome ${fullName2}`)
            setFullName2('')
            setCollegeName2('')
            setEmail2('')
            setPassword2('')
            setBirthdate2('')
            setGender2('')
            setMobileNO2('')
            setotp2('')
            setAddress2('')
            setProfession2('')
            setAlsoHelp2('')

        }
    }
    return (
        <div>
        <div className="header123">
        
        <div className="logo-img">
        <Link to='HomePage'><img src="Images/logo.png" className='logo1'/></Link>
        </div>
        
        <div  className="Language"><IoLanguage/>
        <select name="Language" className="Eng12"   >  
                   <option value=""> English(IND)</option>
                   
                     
               </select>
               </div>      
        </div>
        <div className="sign-up-body">
            <div>
            <h1 className="Title123">Sign up</h1>
            <h3 className="Subtitle223">Welcome, Friends of Animal missed you!</h3>
            </div>
            <form className="Form323" onSubmit={formHandler2}>
              <div className="name523">
                    <div className="Fullnameicon">
                        <VscAccount/>
                        <input type="text" value={fullName2} onChange={(e)=>{setFullName2(e.target.value)}} className="Fullname42Fulln3"  typeof="text" name="Full name"  placeholder="Full name" required />
                    </div>
                    <div className="Clgnameicon">
                        <FaGraduationCap/>
                        <input type="text" value={collegeName2} onChange={(e)=>{setCollegeName2(e.target.value)}} className="Clgname523" typeof="text" name="Collage/school name" placeholder="Company/Collage/school name"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="email" value={email2} onChange={(e)=>{setEmail2(e.target.value)}} className="Clgname523" typeof="text" name="Email" placeholder="Email Address"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="password" value={password2} onChange={(e)=>{setPassword2(e.target.value)}} className="Clgname523" typeof="text" name="password" placeholder="password"  required />
                    </div>
              </div> 
              <div className="shortname23">
              <div className="Dateicon">
              <RiCalendar2Line/>
              <input type="date" value={birthdate2} onChange={(e)=>{setBirthdate2(e.target.value)}} className="Date23" typeof="date" name="Full name"   required/>
              </div>
              <div className="Gendericon">
               <FaTransgender/>
               <select name="Gender" value={gender2} onChange={(e)=>{setGender2(e.target.value)}} className="Gender23" required>
                   <option value="">Gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Other">Other</option>
               </select>
               </div>
              </div>
              <div className="shortname23">
              <div className="mobileicon">
              <RiContactsBook2Fill/>
              <input type="tel" value={mobileNO2} onChange={(e)=>{setMobileNO2(e.target.value)}} id="phone" pattern="[0-9]{10}" className="mobile12" typeof="number" name="Mobile number" placeholder="Mobile number"   required/>
              </div>
              <div className="Otpicon">
              <TiMessageTyping/>
              <input type="password" value={otp2} onChange={(e)=>{setotp2(e.target.value)}} className="Otp123" typeof="password" name="Otp" placeholder="OTP"   required />
              </div>
              </div>
              <div className="addressicon" >
              <GiDirectionSigns/>
              <input type="text" value={address2} onChange={(e)=>{setAddress2(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="Address"  required />
              </div>

              

              <div className="addressicon" >
              <ImProfile/>
              <input type="text" value={profession2} onChange={(e)=>{setProfession2(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="Profession"   required/>
              </div>

              <div className="addressicon" >
              <FaHandsHelping/>
              <input type="text" value={alsoHelp2} onChange={(e)=>{setAlsoHelp2(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="I can also help with"  required />
              </div>


              <div className="Rad2">
            <span className="radio111">
              <input id="Promice" type="checkbox"  name="promice" className="lable11" required/>
              <label for="promice" className="lable12">I would like to receive messages and would like to be part of FoA communities.</label>
              </span>
              <br></br>
              </div>
              <div className="reg_but67990">
                  <button type="submit" className="Register">Register</button>
              </div>
              <p className="acc23">Already have an account <a href="Login" className="signup123">Sign In</a></p>            </form>
        </div>
        </div>
    )
}
export default Volunteer;