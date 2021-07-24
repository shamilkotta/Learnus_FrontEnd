import React, { useState, useLayoutEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
import './Style.scss'

import Admin from '../pages/Admin'
import Admin12 from '../pages/Admin/create'
import Navbar from '../components/Menu/Navbar';

const AdminLayout = () => {

    let { path } = useRouteMatch()

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
            <div className="wrapper layout">
                <div className="layout__sideBar" style={isSideBar ? {width: '320px'} : {width: 0}} >
                    
                </div>
                <div className="layout__container" style={matchMedia && isSideBar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
                    <Switch>
                        <Route exact path={path} component={Admin} />
                        <Route exact path={`${path}/create1`} component={Admin12} />
                        <Redirect to='/404-page-not-found' />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
