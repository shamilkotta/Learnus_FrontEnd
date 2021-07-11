import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

import ResetPassword from '../components/Authentication/ResetPassword/ResetPassword'

function AuthLayout() {

    let { path } = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route exact path={`${path}/reset-password`} component={ResetPassword} />
                <Redirect to='/404-page-not-found'/>
            </Switch>
        </div>
    )
}

export default AuthLayout
