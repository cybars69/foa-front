import React,{useState} from 'react'
import './Sign_up.css';
import { VscAccount } from "react-icons/vsc";
import { BiUserCheck } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";
import { FaTransgender } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TiMessageTyping } from "react-icons/ti";
import { GiDirectionSigns } from "react-icons/gi";        
import { IoLanguage } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Rescue = () => {
    const [fullName, setFullName] = useState("");
    const [preferredName, setPreferredName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [mobileNO, setMobileNO] = useState("");
    const [otp, setotp] = useState("");
    const [address, setAddress] = useState("");
    const [profession, setProfession] = useState("");
    const [alsoHelp, setAlsoHelp] = useState("");

    const formHandler=(e)=>{
        e.preventDefault();
        if (fullName==='' || preferredName==='' || email==='' || password==='' || birthdate==='' || gender==='' || mobileNO===''|| otp===''|| address===''|| profession===''|| alsoHelp===''){
            alert('Please fill in all fields')
       }else{
            alert(`Welcome ${fullName}`)
            setFullName('')
            setPreferredName('')
            setEmail('')
            setPassword('')
            setBirthdate('')
            setGender('')
            setMobileNO('')
            setotp('')
            setAddress('')
            setProfession('')
            setAlsoHelp('')

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
        <div className="sign-up-body">
            <div>
                <h1 className="Title123">Sign up</h1>
                <h3 className="Subtitle223">Welcome, Friends of Animal missed you!</h3>
            </div>

            <form className="Form323" onSubmit={formHandler}>
                <div className="name523">
                    <div className="Fullnameicon">
                        <VscAccount/>
                        <input type="text" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} className="Fullname42Fulln3"  typeof="text" name="fullName"  placeholder="Full name"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="text" value={preferredName} onChange={(e)=>{setPreferredName(e.target.value)}} className="Clgname523" typeof="text" name="Collage/school name" placeholder="I love people call me as"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="Clgname523" typeof="text" name="Email" placeholder="Email Address"  required />
                    </div>
                    <div className="Clgnameicon">
                        <BiUserCheck/>
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="Clgname523" typeof="text" name="password" placeholder="password"  required />
                    </div>
                </div> 

                <div className="shortname23">
                    <div className="Dateicon">
                        <RiCalendar2Line/>
                        <input type="date" value={birthdate} onChange={(e)=>{setBirthdate(e.target.value)}} className="Date23" typeof="date" name="date"   required />
                    </div>
                    <div className="Gendericon">
                        <FaTransgender/>
                        <select name="Gender" className="Gender23" value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
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
                        <input type="tel" value={mobileNO} onChange={(e)=>{setMobileNO(e.target.value)}} id="phone" pattern="[0-9]{10}" className="mobile12" typeof="number" name="Mobile number" placeholder="Mobile number"   required />
                    </div>
                    <div className="Otpicon">
                        <TiMessageTyping/>
                        <input type="number" value={otp} onChange={(e)=>{setotp(e.target.value)}} className="Otp123" typeof="password" name="Otp" placeholder="OTP"   required />
                    </div>
                </div>

                <div className="addressicon" >
                    <GiDirectionSigns/>
                    <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="Address"   required/>
                </div>

                <div className="addressicon" >
                    <ImProfile/>
                    <input type="text" value={profession} onChange={(e)=>{setProfession(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="Profession" required  />
                </div>

                <div className="addressicon" >
                    <FaHandsHelping/>
                    <input type="text" value={alsoHelp} onChange={(e)=>{setAlsoHelp(e.target.value)}} className="address23" typeof="text" name="Address" placeholder="I can also help with"  required />
                </div>


                <div className="Rad2">
                    <span className="radio111">
                        <input id="Promice" type="checkbox"  name="promice" className="lable11" required/>
                        <label for="promice" className="lable12">I would like to receive messages and would like to be part of FoA communities.</label>
                    </span>
                <br></br>
                </div>

                <div className="reg_but67990">
                    <button type="submit" value="Register" className="Register">Register</button>
                </div>
                <p className="acc23">Already have an account <a href="Login" className="signup123">Sign In</a></p>     
            </form>
            
        </div>
        </div>
    )
}
export default Rescue;