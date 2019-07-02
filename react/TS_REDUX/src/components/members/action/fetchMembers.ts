import { memberAPI } from '../../../api/member'
import { MemberEntity } from '../../../model'
import { members } from '../../../api/member/mockData';

export const fetchMembersAction = () => (dispatch) => {
  // action => ajax api
  memberAPI.fetchMembers()
  .then(members => {
    // dispatch 触发reducer的重新计算
    dispatch(fetchMembersCompleted(members))
  })
}
// action 返回的一个type对象 , reducer重新计算  reducer = state + mutations
const fetchMembersCompleted = (members:MemberEntity[]) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payload: members
})