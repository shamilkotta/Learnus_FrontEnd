import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Menu/MobileNavbar/MobileNavbar'
import Navbar from '../components/Menu/Navbar/Navbar'

function GuestLayout(props) {

    const [isMobileNav, setIsMobileNav] = useState(false)
    const navToggler = ()=> { setIsMobileNav(!isMobileNav) }

    const [isMatchMedia, setIsMatchMedia] = useState(false)
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQuery = ()=> {mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)}
    useEffect(() => {
        mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)
        window.addEventListener('resize', handleMediaQuery)
        return () => {
            window.removeEventListener('resize', handleMediaQuery)
        }
    }, [])

    return (
        <>
            {isMatchMedia && <>

                {isMobileNav ? <MobileNavbar toggle={navToggler} style={{top: 0}}/> : <MobileNavbar toggle={navToggler} style={{top: '-100%'}} />}
            
            </>}
            <Navbar toggle={navToggler} />
                {props.children}
            <Footer/>
        </>
    )
}

export default GuestLayout
