import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './component/atomic-design/templates/home'
import { Detail } from './component/atomic-design/templates/detail'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:id' component={Detail} />
        </Switch>
    )
}