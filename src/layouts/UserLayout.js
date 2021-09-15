import React, { useContext, useLayoutEffect } from 'react'
import { Switch, Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
import './Style.scss'

import User from '../pages/User'

import { MenubarToggler } from '../App';
import UserSidebar from '../components/Menu/Sidebar/UserSidebar';
import useAuthorization, { useAdminAuthorization } from '../hooks/useAuthorization';

const UserLayout = () => {

    let { path } = useRouteMatch()
    const { location } = useHistory()
    const authorized = useAuthorization()
    const adminAuthorized = useAdminAuthorization()
 
    const [ isSidebar, setIsSidebar ] = useContext(MenubarToggler)
    
    const matchMediaSidebar = useWindowResize('min-width: 992px')
    useLayoutEffect(() => {
		matchMediaSidebar ? setIsSidebar(true) : setIsSidebar(false);
    }, [matchMediaSidebar])

    
    if (!authorized) {
        if (location.state?.from) {
            return <Redirect to={{
                pathname: location.state.from,
                search: '?popup=logIn',
                state: {
                    to: location.pathname
                }
            }} />
        }else {
            return <Redirect to={{
                pathname: `/`,
                search: '?popup=logIn',
                state: {
                    to: location.pathname
                }
            }} />
        }
    }else if(authorized && adminAuthorized){
        return <Redirect to="/admin" />
    }
    
    return (
        <>
            <div className="wrapper layout">
                <div className="layout__sideBar" style={isSidebar ? {width: '320px'} : {width: 0}} >
                    < UserSidebar/>
                </div>
                <div className="layout__container" style={matchMediaSidebar && isSidebar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
                    <Switch>
                        <Route exact path={`${path}/dashboard`} component={User} />
                        <Route exact path={`${path}/courses`} component={User} />
                        <Route exact path={`${path}/profile`} component={User} />
                        <Redirect exact from={path} to={`${path}/dashboard`} />
                        <Redirect to='/404-page-not-found' />
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default UserLayout
