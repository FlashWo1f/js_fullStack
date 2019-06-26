import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AddTo from './todo/AddTo'
import TodoList from './todo/TodoList'

function App() {
  return (
    <div>
      <AddTo />
      <TodoList />
    </div>
  );
}

export default App;
