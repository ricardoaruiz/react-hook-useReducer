import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Vehicle } from '../pages/Vehicle'
import { Vehicles } from '../pages/Vehicles'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Vehicles />
        </Route>
        <Route path="/vehicle">
          <Vehicle />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
