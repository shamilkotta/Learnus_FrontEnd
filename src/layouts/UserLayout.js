import React, { useContext, useLayoutEffect } from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
import './Style.scss'

import User from '../pages/User'

import { MenubarToggler } from '../App';

const UserLayout = () => {

    let { path } = useRouteMatch()
 
    const [ isSidebar, setIsSidebar ] = useContext(MenubarToggler)
    
    const matchMediaSidebar = useWindowResize('min-width: 992px')
    useLayoutEffect(() => {
		matchMediaSidebar ? setIsSidebar(true) : setIsSidebar(false);
    }, [matchMediaSidebar])
    
    return (
        <>
            <div className="wrapper layout">
                <div className="layout__sideBar" style={isSidebar ? {width: '320px'} : {width: 0}} >
                    
                </div>
                <div className="layout__container" style={matchMediaSidebar && isSidebar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
                    <Switch>
                        <Route exact path={`${path}/dashboard`} component={User} />
                        <Route exact path={`${path}/create-new-course`} component={''} />
                        <Redirect exact from={path} to={`${path}/dashboard`} />
                        <Redirect to='/404-page-not-found' />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default UserLayout
