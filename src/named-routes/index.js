import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import * as Views from './views'
import { buildRoutes } from './routes'

const Routes = buildRoutes(Views)

const App = () => (
  <HashRouter>
    <Routes />
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
