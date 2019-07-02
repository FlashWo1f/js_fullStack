import * as React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { App } from './app'
// Provider是一个组件  可以提供store
import { Provider } from 'react-redux'
import { store } from './store'
import { About, MembersPageContainer } from './components'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // 可以将store和组件联系起来
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={About} ></Route>
            <Route exact path="/members" component={MembersPageContainer} ></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}