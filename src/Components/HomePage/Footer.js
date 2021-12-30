import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-box1'>
                <img src="Images/logo.png" className='logo1'/>

                <div className='declaration'>
                    <p className='disc'>We are a nonprofit organization fighting poverty, disease, and inequity around the world.</p>
                    {/* <div className='footer-links'>
                        <p>About</p>
                        <p>Our Work</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                    </div> */}
                    <p className='rights'>© 2021 Friends of Animal. All rights reserved</p>
                </div>
            </div>
            <div className='social-media-links'>
                <p>Organization</p>
                <p>Ways to donate</p>
                <p>Get involved</p>
                <Link to='/About' className="About4645645"><p>About us</p></Link>
                <p>For sponsors</p>
            </div>
            <div className='social-media-links'>
                <p>Additional Info</p>
                <Link to='/Contact' className="About4645645"><p>Contact</p></Link>
                <Link to='/PrivacyPolicy' className="About4645645"><p>Privacy statement</p></Link>
                <Link to='/TearmsAndConditions' className="About4645645"><p>Condition of use</p></Link>
                <p>Disclosure</p>
            </div>

            <div className='social-media-links'>
                <p>Reach</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Linkedin</p>
            </div>
        </div>
    )
}

export default Footer
