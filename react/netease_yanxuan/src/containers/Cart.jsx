import Cart from '../components/cart/Cart'
import { connect } from 'react-redux'
import { changeAllSelected, changeEachCount, changeEachSelected, delOneGood } from '../redux/actions'


const mapDispatchToProps = (dispatch) =>{
  return {
    allSelectedChange: (selectedFlag) => {
      dispatch(changeAllSelected(selectedFlag))
    },
    eachCount: (countInfo) => {
      dispatch(changeEachCount(countInfo))
    },
    eachSelected: (selectedInfo) => {
      dispatch(changeEachSelected(selectedInfo))
    },
    deleteOneGood: (id) => {
      dispatch(delOneGood(id))
    }
  }
}

const mapStateToProps = (state) => {
  // console.log('reducer state', state)
  return {
    cartList: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)