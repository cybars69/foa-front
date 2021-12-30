import React from 'react'
import './ContactBox.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';

 function ContactBox(){
     return (
         
        <div className="vdfna938472">
            <div className="left-box326geyw">
                <p className="P1--">Email Address</p>
                <p className="P2--">contact@foa.org</p>
                <p className="P3--">Address</p>
                <p className="P4--">Friends of Animal</p>
                <p className="P5--">Shri Sant Gajanan Maharaj College of Engineering Shegaon, 444203 </p>
                <p className="P6--">Follow us on</p>
                <div>
                    <FaLinkedinIn className="social-media-Icons1516"/>
                    <AiOutlineTwitter className="social-media-Icons1516"/>
                    <AiOutlineInstagram className="social-media-Icons1516"/>
                </div>
            </div>

            <div className="infoBox54">
                
                <h1 className="heyThere">Hey there :)</h1>

                <form action="#">
                    
                    <div className="info1cfg">

                        <div className="input-fields68snj">
                            <h3>Full Name*</h3>
                            <input type="text" className="name657678" required></input>
                        </div>

                        <div className="input-fields68snj">
                            <h3>Email*</h3>
                            <input type="email" className="name657678" required></input>
                        </div>

                    </div>

                    <div className="info2ndfjvnd">

                        <div className="input-fields68snj">
                            <h3>Phone Number*</h3>
                            <input type="number" className="name657678" required></input>
                        </div>

                        <div className="input-fields68snj">
                            <h3>Company Name</h3>
                            <input type="text" className="name657678" required></input>
                        </div>

                    </div>
                    <div className="Messagebox87fhb">
                        <h3 className="Message87fhb">Message</h3>
                        <textarea name="paragraph_text" className="message8787" cols="50" rows="10" required></textarea>
                        <input type="submit" className="submitMessage5r5r" value='Submit'/>
                    </div>
                </form>

            </div>

        </div>
        
     )
 }
 export default ContactBox 