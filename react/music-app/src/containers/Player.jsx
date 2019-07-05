import { connect } from 'react-redux'
import Player from '../components/player/Player'
import { showplayer } from '../redux/action'
import { dispatch } from 'C:/Users/10640/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/pairs';

// 过滤自己想要的state当作props传到静态组件里面 
const mapStateToProps = (state) => {
  console.log('player state', state)
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMusicPlayer: (status) => {
      dispatch(showplayer(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)