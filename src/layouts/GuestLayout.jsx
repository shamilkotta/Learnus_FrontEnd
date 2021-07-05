import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Menu/MobileNavbar/MobileNavbar'
import Navbar from '../components/Menu/Navbar/Navbar'

function GuestLayout(props) {

    const [isMobileNav, setIsMobileNav] = useState(false)

    const navToggler = ()=> {
        setIsMobileNav(!isMobileNav)
    }

    return (
        <>
            {isMobileNav ? <MobileNavbar toggle={navToggler} style={{top: 0}}/> : <MobileNavbar toggle={navToggler} style={{top: '-100%'}} />}
            <Navbar toggle={navToggler} />
                {props.children}
            <Footer/>
        </>
    )
}

export default GuestLayout
