import React, { useState } from "react";
import "./Sign_up.css";
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

export const Shelter = () => {
  const [fullName1, setFullName1] = useState("");
  const [ngoName1, setNgoferredName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [birthdate1, setBirthdate1] = useState("");
  const [gender1, setGender1] = useState("");
  const [mobileNO1, setMobileNO1] = useState("");
  const [otp1, setotp1] = useState("");
  const [address1, setAddress1] = useState("");
  const [file1, setFile1] = useState([]);

  const formHandler1 = (e) => {
    e.preventDefault();
    if (
      fullName1 === "" ||
      ngoName1 === "" ||
      email1 === "" ||
      password1 === "" ||
      birthdate1 === "" ||
      gender1 === "" ||
      mobileNO1 === "" ||
      otp1 === "" ||
      address1 === "" ||
      file1 === ""
    ) {
      alert("Please fill in all fields");
    } else {
      alert(`Welcome ${fullName1}`);
      setFullName1("");
      setNgoferredName1("");
      setEmail1("");
      setPassword1("");
      setBirthdate1("");
      setGender1("");
      setMobileNO1("");
      setotp1("");
      setAddress1("");
      setFile1("");
    }
  };
  return (
    <div>
      <div className="header123">
        <div className="logo-img">
          <Link to="HomePage">
            <img src="Images/logo.png" className="logo1" />
          </Link>{" "}
        </div>

        <div className="Language">
          <IoLanguage />
          <select name="Language" className="Eng12">
            <option value=""> English(IND)</option>
          </select>
        </div>
      </div>
      <div className="sign-up-body">
        <div>
          <h1 className="Title123">Sign up</h1>
          <h3 className="Subtitle223">
            Welcome, Friends of Animal missed you!
          </h3>
        </div>
        <form className="Form323" onSubmit={formHandler1}>
          <div className="name523">
            <div className="Fullnameicon">
              <VscAccount />
              <input
                type="text"
                value={fullName1}
                onChange={(e) => {
                  setFullName1(e.target.value);
                }}
                className="Fullname42Fulln3"
                typeof="text"
                name="Full name"
                placeholder="Full name"
                required
              />
            </div>
            <div className="Clgnameicon">
              <FaGraduationCap />
              <input
                type="text"
                value={ngoName1}
                onChange={(e) => {
                  setNgoferredName1(e.target.value);
                }}
                className="Clgname523"
                typeof="text"
                name="Collage/school name"
                placeholder="NGO/Animal Shelter name"
                required
              />
            </div>
            <div className="Clgnameicon">
              <BiUserCheck />
              <input
                type="email"
                value={email1}
                onChange={(e) => {
                  setEmail1(e.target.value);
                }}
                className="Clgname523"
                typeof="text"
                name="Email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="Clgnameicon">
              <BiUserCheck />
              <input
                type="password"
                value={password1}
                onChange={(e) => {
                  setPassword1(e.target.value);
                }}
                className="Clgname523"
                typeof="text"
                name="password"
                placeholder="password"
                required
              />
            </div>
          </div>
          <div className="shortname23">
            <div className="Dateicon">
              <RiCalendar2Line />
              <input
                type="date"
                value={birthdate1}
                onChange={(e) => {
                  setBirthdate1(e.target.value);
                //   console.log(e.target.value,typeof(e.target.value));
                }}
                className="Date23"
                typeof="date"
                name="Full name"
                required
              />
            </div>
            <div className="Gendericon">
              <FaTransgender />
              <select
                name="Gender"
                value={gender1}
                onChange={(e) => {
                  setGender1(e.target.value);
                }}
                className="Gender23"
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="shortname23">
            <div className="mobileicon">
              <RiContactsBook2Fill />
              <input
                type="tel"
                value={mobileNO1}
                onChange={(e) => {
                  setMobileNO1(e.target.value);
                }}
                id="phone"
                pattern="[0-9]{10}"
                className="mobile12"
                typeof="number"
                name="Mobile number"
                placeholder="Mobile number"
                required
              />
            </div>
            <div className="Otpicon">
              <TiMessageTyping />
              <input
                type="password"
                value={otp1}
                onChange={(e) => {
                  setotp1(e.target.value);
                }}
                className="Otp123"
                typeof="password"
                name="Otp"
                placeholder="OTP"
                required
              />
            </div>
          </div>
          <div className="addressicon">
            <GiDirectionSigns />
            <input
              type="text"
              value={address1}
              onChange={(e) => {
                setAddress1(e.target.value);
              }}
              className="address23"
              typeof="text"
              name="Address"
              placeholder="Address"
              required
            />
          </div>
          <div className="coistomfile12">
            <lable for="File">
              <input type="file" name="File" required />
              <br></br>
              Browse your Certificate
            </lable>
          </div>
          <div className="Rad2">
            <span className="radio111">
              <input
                id="Promice"
                type="checkbox"
                name="promice"
                className="lable11"
                required
              />
              <label for="promice" className="lable12">
                I would like to receive messages and would like to be part of
                FoA communities.
              </label>
            </span>
            <br></br>
          </div>
          <div className="reg_but67990">
            <button type="submit" className="Register">
              Register
            </button>
          </div>
          <p className="acc23">
            Already have an account{" "}
            <a href="Login" className="signup123">
              Sign In
            </a>
          </p>{" "}
        </form>
      </div>
    </div>
  );
};
export default Shelter;
