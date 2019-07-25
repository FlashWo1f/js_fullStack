import React, { Component } from 'react';
import { type } from 'os';
import { Consumer } from './context'
export default (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class ConnectedComponent extends Component {
    render() {
      return (
        <Consumer>
          {
            (store) => {
              const state = store.getState()
              const dispatch = store.dispatch
              // 存放所有的props
              let filterProps = {}
              if (typeof mapDispatchToProps === 'function') {
                Object.assign(filterProps, mapDispatchToProps(dispatch))
              }
              if (typeof mapStateToProps === 'function') {
                Object.assign(filterProps, mapStateToProps(state))
              }
              return (<WrappedComponent {...filterProps} />)
            }
          }
        </Consumer>
      )
    }
  }
  return ConnectedComponent
}