import React, { useLayoutEffect, useContext, useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
import './Style.scss'

import AdminSidebar from '../components/Menu/Sidebar/AdminSidebar';

import Admin from '../pages/Admin'
import CreateNewCourse from '../pages/Admin/CreateNewCourse'
import Students from '../pages/Admin/Students'
import Courses from '../pages/Admin/Courses';
import AddContent from '../pages/Admin/AddContent';
import EditCourse from '../pages/Admin/EditCourse';

import { MenubarToggler } from '../App';
import useAuthorization, { useAdminAuthorization } from '../hooks/useAuthorization';

const AdminLayout = () => {

    const { path } = useRouteMatch()
    const { location } = useHistory()
    const authorized = useAuthorization()
    const adminAuthorized = useAdminAuthorization()

    const [ isSidebar, setIsSidebar ] = useContext(MenubarToggler)
    
    const matchMediaSidebar = useWindowResize('min-width: 992px')
    useLayoutEffect(() => {
		matchMediaSidebar ? setIsSidebar(true) : setIsSidebar(false);
    }, [matchMediaSidebar])

    if (authorized && !adminAuthorized) {
        return <Redirect to='/404-page-not-found' />
    }
    if (!authorized && !adminAuthorized) {
        if (location.state?.from) {
            return <Redirect to={{
                pathname: location.state.from,
                search: 'popup=logIn',
                state: {
                    to: location.pathname
                }
            }} />
        }else {
            return <Redirect to={{
                pathname: `/`,
                search: 'popup=logIn',
                state: {
                    to: location.pathname
                }
            }} />
        }
    }


    return (
        <>
            <div className="wrapper layout">
                <div className="layout__sideBar" style={isSidebar ? {width: '320px'} : {width: 0}} >
                    <AdminSidebar/>
                </div>
                <div className="layout__container" style={matchMediaSidebar && isSidebar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
                    
                    <Switch>
                        <Route exact path={`${path}/dashboard`} component={Admin} />
                        <Route exact path={`${path}/create-new-course`} component={CreateNewCourse} />
                        <Route exact path={`${path}/students`} component={Students} />
                        <Route exact path={`${path}/courses`} component={Courses} />
                        <Route exact path={`${path}/edit-course`} component={EditCourse} />
                        <Route exact path={`${path}/add-content`} component={AddContent} />
                        <Redirect exact from={path} to={`${path}/dashboard`} />
                        <Redirect to='/404-page-not-found' />
                    </Switch>
                    
                </div>
            </div>
        </>
    )
}

export default AdminLayout
