import * as React from 'react'
import { Header } from './components/header'
export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
    </div>
  )
}