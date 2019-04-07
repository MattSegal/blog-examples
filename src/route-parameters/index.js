import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import * as Views from './views'

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/business/:businessId/profile" render={Views.BusinessView} />
      <Route path="/not-found" render={Views.NotFoundView} />
      <Route path="/" render={Views.HomeView} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
