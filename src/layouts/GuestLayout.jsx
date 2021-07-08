import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Menu/MobileNavbar/MobileNavbar'
import Navbar from '../components/Menu/Navbar/Navbar'

import Home from '../pages/Guest'
import Cart from '../pages/Guest/Cart/Cart'
import Checkout from '../pages/Guest/Checkout/Checkout'
import CourseLanding from '../pages/Guest/Course Landing/CourseLanding'
import Authentication from '../pages/Guest/Authentication'
import ErrorPage from '../pages/Guest/ErrorPage'

function GuestLayout() {

    let { path, url } = useRouteMatch()

    const [isMobileNav, setIsMobileNav] = useState(false)
    const navToggler = ()=> { setIsMobileNav(!isMobileNav) }

    const [isMatchMedia, setIsMatchMedia] = useState(false)
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQuery = ()=> {mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)}
    useEffect(() => {
        handleMediaQuery()
        window.addEventListener('resize', handleMediaQuery)
        return () => {
            window.removeEventListener('resize', handleMediaQuery)
        }
    }, [])
    console.log(url)
    console.log(path)
    return (
        <>
                {/* <Route exact path={`${path}login`} component={Authentication} /> */}
                {isMatchMedia && <> {isMobileNav ? <MobileNavbar toggle={navToggler} style={{top: 0}}/> : <MobileNavbar toggle={navToggler} style={{top: '-100%'}} />} </>}
                <Navbar toggle={navToggler} />
            <Switch>
                    <Route exact path={path} component={Home} />
                    <Route exact path={`${path}course`} component={CourseLanding} />
                    <Route exact path={`${path}cart`} component={Cart} />
                    <Route exact path={`${path}checkout`} component={Checkout} />
                    <Route  component={ErrorPage} />
            </Switch>
            <Footer/>
        </>
    )
}

export default GuestLayout
