import React, { Component } from 'react';
import connect from './react-redux/connect'
class Count extends Component {
  state = {  }
  render() { 
    var { count } = this.props
    return ( 
      <div>
        <div>count: {count}</div>
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  count: state
})
const mapDispatchToProps = (dispatch) => {
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);