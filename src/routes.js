import React from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Reservas from './pages/Reservas'

export default function Routes() {
    const { location } = useHistory()
    console.log(location)
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/reservas">
                <Reservas />
            </Route>
        </Switch>
    )
}
