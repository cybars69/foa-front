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
import { Link } from "react-router-dom";
import { BiUserCheck } from "react-icons/bi";

export const Student_one = () => {
    const [fullName3, setFullName3] = useState("");
    const [collegeName3, setCollegeName3] = useState("");
    const [email3, setEmail3] = useState("");
    const [password3, setPassword3] = useState("");
    const [birthdate3, setBirthdate3] = useState("");
    const [gender3, setGender3] = useState("");
    const [mobileNO3, setMobileNO3] = useState("");
    const [otp3, setotp3] = useState("");
    const [address3, setAddress3] = useState("");
    

    const formHandler3=(e)=>{
        e.preventDefault();
        if (fullName3==='' || collegeName3==='' || email3==='' || password3==='' || birthdate3==='' || gender3==='' || mobileNO3===''|| otp3===''|| address3===''){
            alert('Please fill in all fields')
       }else{
            alert(`Welcome ${fullName3}`)
            setFullName3('')
            setCollegeName3('')
            setEmail3('')
            setPassword3('')
            setBirthdate3('')
            setGender3('')
            setMobileNO3('')
            setotp3('')
            setAddress3('')
            

        }
    }
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
        <form className="sign-up-body" >
            <div>
            <h1 className="Title123">Sign up</h1>
            <h3 className="Subtitle223">Welcome, Friends of Animal missed you!</h3>
            </div>

            <form className="Form323" onSubmit={formHandler3}>
                <div className="name523">
                    <div className="Fullnameicon">
                        <VscAccount/>
                        <input type="text" value={fullName3} onChange={(e)=>{setFullName3(e.target.value)}} className="Fullname42Fulln3"  typeof="text" name="Full name"  placeholder="Full name"  required/>
                    </div>
                    <div className="Clgnameicon">
                        <FaGraduationCap/>
                        <input type="text" value={collegeName3} onChange={(e)=>{setCollegeName3(e.target.value)}} className="Clgname523" typeof="text" name="Collage/school name" placeholder="Collage/school name"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="email" value={email3} onChange={(e)=>{setEmail3(e.target.value)}} className="Clgname523" typeof="text" name="Email" placeholder="Email Address"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="password" value={password3} onChange={(e)=>{setPassword3(e.target.value)}} className="Clgname523" typeof="text" name="password" placeholder="password"  required />
                    </div>
                </div> 
                <div className="shortname23">
                    <div className="Dateicon">
                        <RiCalendar2Line/>
                        <input type="date" value={birthdate3} onChange={(e)=>{setBirthdate3(e.target.value)}} className="Date23" typeof="date" name="Full name"   required />
                    </div>
                    <div className="Gendericon">
                        <FaTransgender/>
                        <select name="Gender" value={gender3} onChange={(e)=>{setGender3(e.target.value)}} className="Gender23" required>
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
                        <input type="tel" value={mobileNO3} onChange={(e)=>{setMobileNO3(e.target.value)}} className="mobile12" id="phone" pattern="[0-9]{10}" name="Mobile number" placeholder="Mobile number"   required />
                    </div>
                    <div className="Otpicon">
                        <TiMessageTyping/>
                        <input type="password" value={otp3} onChange={(e)=>{setotp3(e.target.value)}} className="Otp123" typeof="password" name="Otp" placeholder="OTP"   required />
                    </div>
                </div>
                <div className="addressicon" >
                    <GiDirectionSigns/>
                    <input type="text" value={address3} onChange={(e)=>{setAddress3(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="Address"   required/>
                </div>
                <div className="Rad2">
                    <span className="radio111">
                        <input id="Promice" type="checkbox"  name="promice" className="lable11" required/>
                        <label for="promice" className="lable12"> I promise to talk to my Principal / Class Teacher about FoA.</label>
                    </span>
                        <br></br>
                    <span className="radio112">
                        <input type="checkbox"  name="register" className="lable11" required/>
                        <label for="register" className="lable12">Register me as a Friends of Animal Volunteer when I turn 18.</label>
                    </span>
                </div>
                <div className="reg_but">
                    <button type="submit" className="Register">Register</button>
                </div>
                <p className="acc23">Already have an account <a href="Login" className="signup123">Sign In</a></p>            
            </form>
        </form>

        </div>
    )
}
export default Student_one;