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
import Authentication from '../pages/Guest/Authentication'
import ErrorPage from '../pages/Guest/ErrorPage'
import useScrollToTop, { UseScrollToTopOnRoute } from '../hooks/useScrollToTop'

function GuestLayout() {

    let { path } = useRouteMatch()

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
            <UseScrollToTopOnRoute/>
            <Switch>
                    <Route exact path={path} component={Home} />
                    <Route exact path='/all-courses' component={Courses} />
                    <Route exact path='/course' component={CourseLanding} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route path='/reset-password' component={Authentication} />
                    <Route exact path='/404-page-not-found' component={ErrorPage} />
                    <Redirect to='/404-page-not-found' />
            </Switch>
            <h1 onClick={useScrollToTop}>hi</h1>
            <Footer/>
        </>
    )
}

export default GuestLayout
