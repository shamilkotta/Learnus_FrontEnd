import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Admin from '../pages/Admin'
import Admin12 from '../pages/Admin/create'

const AdminLayout = () => {

    let { path } = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path} component={Admin} />
            <Route exact path={`${path}/create1`} component={Admin12} />
        </Switch>
    )
}

export default AdminLayout
