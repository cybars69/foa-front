import React from 'react'
import './DonateBar.css'
function DonateBar() {
    return (
        <div className='DonateBar'>
            <button>Donate Now</button>

            <div className='donate-checkbox'>
                <div>
                    <input type="checkbox"></input>
                    <label >500 INR</label>
                </div> 
                <div>
                    <input type="checkbox"></input>
                    <label >1000 INR</label>
                </div> 
                <div>
                    <input type="checkbox"></input>
                    <label >2000 INR</label>
                </div> 
            </div> 

            <div className='Donate-amount'>
                <input type="number" placeholder='ENTER AMOUNT'></input>
                <button>Donate Now</button>
            </div>
            
        </div>
    )
}

export default DonateBar
