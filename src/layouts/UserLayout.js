import React, { useState, useLayoutEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
import './Style.scss'

import Navbar from '../components/Menu/Navbar';

const UserLayout = (props) => {

    const [isSideBar, setIsSideBar] = useState(true)
    const matchMedia = useWindowResize('min-width: 992px')
    const toggleSideBar= (e)=> {
        e.preventDefault()
        setIsSideBar(!isSideBar)
    }

    useLayoutEffect(() => {
        matchMedia ? setIsSideBar(true) : setIsSideBar(false)
    }, [matchMedia])
    
    return (
        <>
            <Navbar sideBar toggleSideBar={toggleSideBar} />
            <div className="wrapper admin-layout">
                <div className="admin-layout__sideBar" style={isSideBar ? {width: '320px'} : {width: 0}} >
                    
                </div>
                <div className="admin-layout__container" style={matchMedia && isSideBar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
                    <Switch>
                        <Route exact path={''} component={''} />
                        <Route exact path={''} component={''} />
                        <Redirect to='/404-page-not-found' />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default UserLayout
