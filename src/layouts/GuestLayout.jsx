import React, { useState, useLayoutEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/Menu/MobileNavbar/MobileNavbar'
import Navbar from '../components/Menu/Navbar/Navbar'

import Home from '../pages/Guest'
import Courses from '../pages/Guest/Courses/Courses'
import Cart from '../pages/Guest/Cart/Cart'
import Checkout from '../pages/Guest/Checkout/Checkout'
import CourseLanding from '../pages/Guest/Course Landing/CourseLanding'
import ErrorPage from '../pages/Guest/ErrorPage'
import { ScrollToTopOnRoute } from '../components/RestoreScroll/RestoreScroll'

function GuestLayout() {

    let { path, url } = useRouteMatch()

    const [isMobileNav, setIsMobileNav] = useState(false)
    const navToggler = ()=> { setIsMobileNav(!isMobileNav) }

    const [isMatchMedia, setIsMatchMedia] = useState(false)
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQuery = ()=> {mediaQuery.matches ? setIsMatchMedia(true) : setIsMatchMedia(false)}
    useLayoutEffect(() => {
        handleMediaQuery()
        window.addEventListener('resize', handleMediaQuery)
        return () => {
            window.removeEventListener('resize', handleMediaQuery)
        }
    }, [])
    
    return (
        <>
            {isMatchMedia && <> {isMobileNav ? <MobileNavbar toggle={navToggler} style={{top: 0}}/> : <MobileNavbar toggle={navToggler} style={{top: '-100%'}} />} </>}
            <Navbar toggle={navToggler} />
            <ScrollToTopOnRoute/>
            <Switch>
                    <Route exact path={path} component={Home} />
                    <Route exact path={`${path}all-courses`} component={Courses} />
                    <Route exact path={`${path}course`} component={CourseLanding} />
                    <Route exact path={`${path}cart`} component={Cart} />
                    <Route exact path={`${path}checkout`} component={Checkout} />
                    <Route exact path='/404-page-not-found' component={ErrorPage} />
                    <Redirect to='/404-page-not-found' />
            </Switch>
            <Footer/>
        </>
    )
}

export default GuestLayout
