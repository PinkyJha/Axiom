import React from 'react'
import USPS from '../Assets/usps.gif'

const Container3 = () => {
    return (
        <div className="container3">
            <div>
                <div>
                    <p>USPS</p>
                    <p>Priority (1-3 Days)</p>
                </div>
                <img  src={USPS} alt=""/>
            </div>
            
        </div>
    )
}

export default Container3
