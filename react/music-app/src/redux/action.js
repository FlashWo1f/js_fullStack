// 纯对象
import * as ActionType from './actionTypes'
// 创建 action

export function showplayer(showStatus){
  return { type: ActionType.SHOW_PLAYER, showStatus }
}

export function changeSong(song) {
  return { type: ActionType.CHANGE_SONG, song}
}