import React, { useState, useEffect } from 'react';
import '../TermsAndConditions/TacAndPpNavbar.css'
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Ppnavbar() {

    
    const [click, setClick] = useState(false);
  

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

   

    return (
        <div className="gradient479437njf">
            <div className='Navbar-parent86' >

                <div className='navbar5m21b'>

                    <div className='left-top1515'>
                        <div>
                            <img src="Images/logo.png" className='logo783f'/>
                        </div>
                        
                    </div>

                    <div className='right-top78vgh'>
                        <div className='top-mid2bvh'>
                            <Link to='/' className="About4645645"><p>Home</p></Link>
                            <Link to='/' className="About4645645"><p>Rescue Mission</p></Link>
                            <Link to='/Event' className="About4645645"><p>Events</p></Link>    
                            <Link to='/About' className="About4645645"><p>About</p></Link>
                            <Link to='/Contact' className="About4645645"><p>Contact</p></Link>                       
                        </div>
                        <div >
                            <Link to='/Donate' className="About4645645"><button className='button3549djb'>Donate Now</button></Link>
                        </div>
                    </div>

                    <div className="menu-icon739fy" onClick={handleClick}>
                        {click? <FaTimes/>:<FaBars/>}
                    </div>

                    <ul className={click ? 'nav-menu20 active688v' : 'nav-menu1nfj'}>
                        <li className='nav-item61h'>
                            <Link to='/Event' className='nav-links78bh' onClick={closeMobileMenu}>
                            Event
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Blog
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Rescue Mission
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Volenteer
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/About'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            About
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/Contact'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Contact
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Login
                            </Link>
                        </li>

                        <li className='nav-item61h'>
                            <Link
                            to='/'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Register
                            </Link>
                        </li>

                        <li className='nav-item61h special'>
                            <Link
                            to='/Donate'
                            className='nav-links78bh'
                            onClick={closeMobileMenu}
                            >
                            Donate
                            </Link>
                        </li>

                    
                    </ul>
            
                
                </div>
                <h1 className="termsOfUse78dxg">Friends of Animal’s Privacy Policy</h1>
                <p className="tOU256j">Friends of Animal’s Privacy Policy</p>
                
            </div>

        </div>
    )
}

export default Ppnavbar