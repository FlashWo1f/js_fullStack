import { connect } from 'react-redux'
import Detail from  '../common/detail/Detail'
import { addToCart } from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
  return {
    addGoodToCart: (good) => {
      dispatch(addToCart(good))
    }
  }
}

const mapStateToProps = (state) => {

}

export default connect(null, mapDispatchToProps)(Detail)