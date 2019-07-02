import React, { Component } from 'react';

class List extends Component {
  state = {  }
  render() { 
    const { content } = this.props
    return ( 
      <>
        <div>
        {
          content.map(() => {
            
          })
        }</div>
        <button>删除</button>
      </>
     );
  }
}
 
export default List;