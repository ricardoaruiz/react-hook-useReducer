import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalContextProvider } from '../commons/context/GlobalContext'
import { Vehicle } from '../pages/Vehicle'
import { Vehicles } from '../pages/Vehicles'

export const Routes = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Vehicles />
          </Route>
          <Route path="/vehicle/:id">
            <Vehicle />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}
