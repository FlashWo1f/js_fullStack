import { connect } from 'react-redux'
import Detail from  '../common/detail/Detail'
import { addToCart, showTabbar } from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
  return {
    addGoodToCart: (good) => {
      dispatch(addToCart(good))
    },
    triggerTabbar: (flag) => {
      dispatch(showTabbar(flag))
    }
  }
}

const mapStateToProps = (state) => {

}

export default connect(null, mapDispatchToProps)(Detail)