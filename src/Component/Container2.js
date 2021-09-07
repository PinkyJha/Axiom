import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';
import './Container2.css'
import EditIcon from '@material-ui/icons/Edit';

const Container2 = () => {
    return (
        <div className="container2">
            <div>
                <div style={{display:'flex',justifyContent:'space-evenly', borderBottom:'1px solid lightgrey'}}>
                    <p style={{display:'flex'}}>LOCATEINV 5549475 &nbsp; <RefreshIcon style={{color:'skyblue'}}/></p>
                    <span>
                        <p style={{fontWeight:'bold'}}>SHIP DATE</p>
                        <p className="ship-date">7/20/21</p>
                    </span>
                    <span>
                        <p style={{fontWeight:'bold'}}>REFRENCE</p>
                        <p className="ship-date">176123</p>
                    </span>
                </div>
                <section className="sen-rev">
                    <section>
                        <div className="sender-section">
                            <p style={{display:'flex',fontWeight:'bold'}}>Sender <EditIcon/></p>
                            <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p>Deepak Sharma
                            <br/>
                            2nd Foundation
                            <br/>
                            3012 E Aelaxendar Rd 1002
                            <br/>
                            North Las Vegas, NV 89-30
                            <br/>
                            UNITED STATES
                            <br/>
                            70241552263
                        </p>

                    </section>
                    <section>
                        <div className="sender-section">
                            <p style={{display:'flex',fontWeight:'bold'}}>Receiver <EditIcon/></p>
                            <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p> @Ferya -for KAI
                            <br/>
                            <i style={{color:'gray'}}>company</i>
                            <br/>
                            89-921 Miapoula Place
                            <br/>
                            Waiane,HI 96792
                            <br/>
                            UNITED STATES
                            <br/>
                            <i style={{color:'gray'}}>phone</i>
                        </p>
                    </section>
                </section>
                
            </div>
        </div>
    )
}

export default Container2
