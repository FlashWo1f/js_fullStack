import React, { Component } from 'react';
class List extends Component {
  state = {  }
  // deleteItem = (i) => {
  //   this.props.delete(i)
  // }
  render() {
    console.log('list', this.props)
    var { valueAndId, dele } = this.props
    return (
      <div className="list">
        list
        <ul>
          {
            valueAndId.map((item, i) => {
              return(
                <li key={i}>
                  <span>{item.ID}</span>
                  <span>{item.value}</span>
                  <button onClick={() => {
                    console.log('index', item.ID)
                    dele(item.ID)
                    }}>delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default List;