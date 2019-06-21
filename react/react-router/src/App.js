import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

function Index() {
  return (
    <div>Home</div>
  )
}

function About() {
  return (
    <div>about</div>
  )
}

function User() {
  return (
    <div>user</div>
  )
}

function Login () {
  return (
    <div>Login</div>
  )
}
/**
 * 进入页面之前 鉴权
 * 保护路由
 */
function PrivateRoute (props) {
  const { path, component: Component } = props
  return (
    <Route path={path} render={
      () => {
        return false ? <Component/> : <Redirect to={{
          pathname: '/login'
        }} />
      }
    }>
      
    </Route>
  )
}

function Protect() {
  return (
    <div>Protect</div>
  )
}

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
        <li>
          <Link to="/protect">Protect page</Link>
        </li>
      </ul>
      {
        true ?
        <Route path="/" exact component={Index}>

        </Route> : <div>no router</div>  
      }
      <Route path="/about" component={About}></Route>
      {/* <Route path="/user" component={User}></Route> */}
      <Route path="/login" component={Login}></Route>
      <PrivateRoute path="/user" component={User}></PrivateRoute>
      <Route path="/protect" render={() => {
        return false ? <Protect /> : <Redirect to={{
          pathname: '/login',
          state: { from: '/protect' }
        }} />
      }}></Route>
    </Router>
  )
}

export default App;
