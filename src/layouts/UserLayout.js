import React, { useContext, useLayoutEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import useWindowResize from '../hooks/useWindowResize';
import './Style.scss'

import { MenubarToggler } from '../App';

const UserLayout = () => {
 
    const [ isSidebar, setIsSidebar ] = useContext(MenubarToggler)
    
    const matchMediaSidebar = useWindowResize('min-width: 992px')
    useLayoutEffect(() => {
		matchMediaSidebar ? setIsSidebar(true) : setIsSidebar(false);
    }, [matchMediaSidebar])
    
    return (
        <>
            <div className="wrapper admin-layout">
                <div className="admin-layout__sideBar" style={isSidebar ? {width: '320px'} : {width: 0}} >
                    
                </div>
                <div className="admin-layout__container" style={matchMediaSidebar && isSidebar ? {marginLeft: '320px'} : {marginLeft: '0%'}} >
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
