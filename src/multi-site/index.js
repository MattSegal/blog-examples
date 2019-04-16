import ReactDOM from 'react-dom'
import React from 'react'
import { Container } from 'semantic-ui-react'
import { HashRouter, Switch, Link, Route } from 'react-router-dom'

import { Button, Card } from './components'

import './styles/index.scss'

const SITES = [
  { theme: 'fancy', path: '/fancy'},
  { theme: 'serious', path: '/serious'},
  { theme: 'serious', path: '/'},
]

const Site = theme => (
  <div className={`${theme}-site`}>
    <Container text>
      <Card fancy>
        <h1 style={{ textAlign: 'center' }}>
          Welcome to my site
        </h1>
      </Card>
      <Card>
        <p>Don't like it?</p>
        <Link to={theme === 'serious' ? '/fancy' : '/serious'}>
          <Button>Go somewhere else</Button>
        </Link>
      </Card>
    </Container>
  </div>
)

const App = () => (
  <HashRouter>
    <Switch>
      {SITES.map(({ theme, path }) => (
        <Route
          key={theme}
          path={path}
          render={() => <Site theme={theme} />}
        />
      ))}
    </Switch>
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
