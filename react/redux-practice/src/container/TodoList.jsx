import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { add, Del } from '../store'
const mapStateToProps = (state) => {
  console.log('state---------------', state)
  return {
    inputValue: state.Reducer
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addToList: (value, ID) => {
      console.log('dispatch', value, ID)
      dispatch(add(value, ID))
      // console.log('dispatch(add(value))', dispatch(add(value)))
    },
    DelToList: (i) => {
      console.log(Del(i));
      dispatch(Del(i))
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList)