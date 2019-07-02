// 状态的计算 reducer 纯函数 返回当前状态
// reducer 负责返回一个状态模块
// state 初始值
import { MemberEntity } from "../model"

export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch(action.type) {
    case 'FETCH_MEMBER_COMPLETED':
      return action.payload
  }
  // return state
}