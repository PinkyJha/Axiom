import React from 'react'
import Container1 from './Container1'
import './Axiom.css'
import Container2 from './Container2'
import NavBar from './Navbar/NavBar'
import SideBar from './SideBar/SideBar'

const Axiom = () => {
    return (
        <div id="axiom-main-wrapper">
            <NavBar/>
            
            <section style={{display:'flex'}}>
            <SideBar/>
                <Container1/>
                <Container2/>
            </section>
            
        </div>
    )
}

export default Axiom
