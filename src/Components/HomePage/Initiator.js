import React from 'react'
import './Initiator.css'
function Initiator() {
    return (
        <div className='Initiator'>
            <p>Our Great Initiator</p>
            
            <div>
                <div>
                    <img src="Images/suresh-rathi.jpg" className='compInitiatorImg'  />
                    <p className='InitiatorName'>Mr. Suresh Rathi</p>
                    <p className='InitiatorPost'>CSCO, ACC</p>
                </div>
                <div>
                    <img src="Images/sanjeev sir.jpg" className='compInitiatorImg' />
                    <p className='InitiatorName'>Mr. Sanjeev Murumkar</p>
                    <p className='InitiatorPost'>Head of OD, Adani Electricity</p>
                </div>
                <div>
                    <img src="Images/principal_c.png" className='compInitiatorImg' />
                    <p className='InitiatorName'>Mr. Sunil Somani</p>
                    <p className='InitiatorPost'>Principal SSGMCE</p>
                </div>
            </div>
        </div>
    )
}

export default Initiator
