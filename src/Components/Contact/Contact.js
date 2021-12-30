import React from 'react'
import Footer from '../HomePage/Footer'
import NavigationBar from '../HomePage/NavigationBar'
import Top2 from './Top2'

import Contactbox from './ContactBox'

const Contact = () => {
    return (
        <div className='top'>
            <NavigationBar/>
            <Top2/>
            <Contactbox/>
            <Footer/>
        </div>
    )
}

export default Contact