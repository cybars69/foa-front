import React,{useState} from 'react'
import './Topbar.css'
import {Link} from 'react-router-dom'


function Topbar() {
    
    return (
        <div className='topbar' >
            <div className='bag-img-parent'>
                {/* <img src="Images/image3.png" className='bag-img' /> */}
            </div>

            <div className='img-text'>
                <div className='tag-line'>
                    <p>Be kind to everykind,</p>
                    <p>not just mankind</p>
                </div>
                <div className='topbar-button'>
                    
                    <button className='Rescue-Mission'>Rescue Mission</button>

                    <Link to='/Donate' className="About4645645">
                        <button className='donate-now-button'>Donate Now</button>
                    </Link>
                </div>
            </div>

            
            
        </div>
        
    )
}

export default Topbar
