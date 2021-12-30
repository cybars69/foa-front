
import  React from 'react'
import './About.css'
import Top from './Top'

import Intro from './Intro'
import Ablog from './Ablog'
import Card from './Card'
import Accordion from './Accordion'
import Footer from '../HomePage/Footer'
import NavigationBar from '../HomePage/NavigationBar'




function About ()  {
    return (
        <div className='about'>
            
            <NavigationBar/>
            <Top/>
            <Intro/>
            <Ablog/>
            <Card />
            <div className="accordion-box">
                <div className="accordion">
                    <Accordion/>
                </div> 
            </div>
               
            <Footer/>
            
        </div>
    )
}

export default About


