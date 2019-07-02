import React from 'react';
// import logo from './logo.svg';
import ShopCart from './ShopCart'
import LoginStatus from './LoginStatus'
import WithLogin from './WithLogin'
import './App.css';
// import TodoList from './TodoList'

const WithLoginStatus = WithLogin(LoginStatus)
const WithShopCart = WithLogin(ShopCart)

function App() {
  return (
    <>
      {/* <LoginStatus />
      <ShopCart /> */}
      <WithLoginStatus />
      <WithShopCart />
      {/* <TodoList /> */}
    </>
  )
}

export default App;
