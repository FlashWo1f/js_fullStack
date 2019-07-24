import App from '../App'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    showTabbar: state.showTabbar
  }
}

export default connect(mapStateToProps)(App)