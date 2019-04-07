import React from 'react'
import { Switch, Route } from 'react-router-dom'

// All routes used by the app.
//
//    path: URL path to get to route
//    view: view function to be rendered
//    name: route name to be used by links and redirects
//
const ROUTES = [
  {
    path: '/about',
    view: 'AboutView',
    name: 'ABOUT',
  },
  {
    path: '/dashboard',
    view: 'DashboardView',
    name: 'DASHBOARD',
  },
  {
    path: '/user/:userId/profile',
    view: 'ProfileView',
    name: 'PROFILE',
  },
  {
    path: '/',
    view: 'HomeView',
    name: 'HOME',
  },
]

export const ROUTE_NAMES = ROUTES.reduce(
  (obj, { path, name }) => ({ ...obj, [name]: path }),
  {}
)

export const buildRoutes = Views => () => (
  <Switch>
    {ROUTES.map(({ path, view }) => (
      <Route
        key={path}
        path={path}
        render={props => {
          const View = Views[view]
          console.log('Rendering', view, path)
          return <View {...props} />
        }}
      />
    ))}
  </Switch>
)
