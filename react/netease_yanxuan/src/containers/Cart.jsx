import Cart from '../components/cart'
import { connect } from 'react-redux'


const mapDispatchToProps = () =>{

}

const mapStateToProps = (state) => {
  console.log('reducer state', state)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)