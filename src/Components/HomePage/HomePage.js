import React from 'react'

import NavigationBar from './NavigationBar'
import Topbar from './Topbar';
import './HomePage.css'
import Slider from './Slider';
import Comp_Blog from './Comp_Blog';
// import Initiator from './Initiator';
import Footer from './Footer';
import About_Info from './About_Info';
import VideosSlider from './VideosSlider';
// import {Link} from 'react-router-dom'
function HomePage() {
    return (
        <div className='Homepage'>
            <div className='top'>
                <NavigationBar className='NavigationBar'/>
                <Topbar className='Topbar'/>
                
            </div>
            <About_Info/>
            <VideosSlider/>
            
            <Comp_Blog/>
            <Slider/>
            {/* <Initiator/> */}

            <Footer/>
            

            
        </div>
    )
}

export default HomePage
