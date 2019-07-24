import Recommend from '../components/index/Recommend'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    showTabbar: state.showTabbar
  }
}

export default connect(mapStateToProps)(Recommend)