import Cart from '../components/cart/Cart'
import { connect } from 'react-redux'
import { changeAllSelected } from '../redux/actions'


const mapDispatchToProps = (dispatch) =>{
  return {
    allSelectedChange: (selectedFlag) => {
      dispatch(changeAllSelected(selectedFlag))
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