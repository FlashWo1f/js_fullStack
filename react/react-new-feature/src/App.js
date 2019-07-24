import React from 'react';
import './App.css';
import Count from './hook/stateHook'
import Index from './hook/beforeEffectHook'
import EffectHookDemo from './hook/effectHook'
import ReducerHook from './hook/ReducerHook'
import ConcurrentModeDemo from './ConcurrentMode/index'

function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo /> */}
      <Count />
      <Index />
      <EffectHookDemo />
      <ReducerHook />
    </div>
  );
}

export default App;
