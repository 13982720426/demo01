import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routeProps) => <App {...routeProps} />} />
      {mainRoutes.map((route) => {
        return <Route key={route.path} {...route} />
      })}
      <Redirect to="/admin" from="/" />

      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
)
