import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Footer from '../components/Footer'

import Home from '../pages/Guest'
import Courses from '../pages/Guest/Courses'
import Cart from '../pages/Guest/Cart'
import Checkout from '../pages/Guest/Checkout'
import CourseLanding from '../pages/Guest/CourseLanding'
import ErrorPage from '../pages/Guest/ErrorPage'
import ResetPassword from '../components/Authentication/ResetPassword'


function GuestLayout() {

    return (
        <>
            <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/courses' component={Courses} />
                    <Route exact path='/course/:id' component={CourseLanding} />
                    <Redirect exact from='/course' to='/courses' />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route path='/reset-password'><div style={{height: '80vh'}}><ResetPassword/></div></Route>
                    <Route exact path='/404-page-not-found' component={ErrorPage} />
                    <Redirect to='/404-page-not-found' />
            </Switch>
            <Footer/>
        </>
    )
}

export default GuestLayout
