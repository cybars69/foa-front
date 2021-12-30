import React, { useState, useEffect } from 'react';
import './NavigationBar.css'
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NavigationBar() {

    
    const [click, setClick] = useState(false);
  

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

   

    return (
        <div>
            <div className='Navbar-parent' >

                <div className='navbar'>

                    <div className='left-top'>
                        <div>
                            <img src="Images/logo.png" className='logo'/>
                        </div>
                        
                    </div>

                    <div className='right-top'>
                        <div className='top-mid2'>
                            <Link to='/' className="About4645645"><p>Home</p></Link>
                            <Link to='/Login' className="About4645645"><p>Sign in</p></Link>
                            <Link to='/Event' className="About4645645"><p>Events</p></Link>    
                            <Link to='/About' className="About4645645"><p>About</p></Link>
                            <Link to='/Contact' className="About4645645"><p>Contact</p></Link>                       
                        </div>
                        <div >
                        <Link to='/Donate' className="About4645645">
                            <button className='button'>Donate Now</button>
                        </Link>
                        </div>
                    </div>

                    <div className="menu-icon" onClick={handleClick}>
                        {click? <FaTimes/>:<FaBars/>}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu1'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Event
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Blog
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Rescue Mission
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Volenteer
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Contact
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Login
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Register
                            </Link>
                        </li>

                        <li className='nav-item special'>
                            <Link
                            to='/'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Donate
                            </Link>
                        </li>

                    
                    </ul>
            

                </div>
                
            </div>

        </div>
    )
}

export default NavigationBar
