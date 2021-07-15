import React, { useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { useScrollToTopOnRoute } from '../hooks/useScrollToTop'
import useWindowResize from '../hooks/useWindowResize'

import Footer from '../components/Footer'
import MobileNavbar from '../components/Menu/MobileNavbar'
import Navbar from '../components/Menu/Navbar'
import ScrollToTop from '../components/ScrollToTop'

import Home from '../pages/Guest'
import Courses from '../pages/Guest/Courses'
import Cart from '../pages/Guest/Cart'
import Checkout from '../pages/Guest/Checkout'
import CourseLanding from '../pages/Guest/CourseLanding'
import ErrorPage from '../pages/Guest/ErrorPage'
import ResetPassword from '../components/Authentication/Auth/ResetPassword'


function GuestLayout() {

    const { path } = useRouteMatch()
    const [isMobileNav, setIsMobileNav] = useState(false)
    const navToggler = ()=> { setIsMobileNav(!isMobileNav) }
    const isMatchMedia = useWindowResize('max-width: 768px')
    useScrollToTopOnRoute()

    return (
        <>
            {isMatchMedia && <> {isMobileNav ? <MobileNavbar toggle={navToggler} style={{top: 0}}/> : <MobileNavbar toggle={navToggler} style={{top: '-100%'}} />} </>}
            <Navbar toggle={navToggler} />
            <Switch>
                    <Route exact path={path} component={Home} />
                    <Route exact path='/all-courses' component={Courses} />
                    <Route exact path='/course' component={CourseLanding} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route path='/reset-password'><div style={{height: '80vh'}}><ResetPassword/></div></Route>
                    <Route exact path='/404-page-not-found' component={ErrorPage} />
                    <Redirect to='/404-page-not-found' />
            </Switch>
            <ScrollToTop/>
            <Footer/>
        </>
    )
}

export default GuestLayout
