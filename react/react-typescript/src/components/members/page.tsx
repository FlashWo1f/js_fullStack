import * as React from 'react';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';

// export const MembersPage: React.StatelessComponent<{}> = () => {
//   return (
//     <div className="row">
//       <h2>Members Page</h2>
//     </div>
//   )
// }
interface State {
  members: MemberEntity[]
}
interface Props {
  
}

export class MembersPage extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      members: []
    }
  } 
  public componentDidMount(){
    memberAPI.fetchMembers()
    .then((members) => {
      this.setState({
        members
      })
    })
  }
  public render () {
    return (
      <div>
        <table className="table">
          <thead>
            <tbody>
              {
                this.state.members.map(MemberRow)
              }
            </tbody>
          </thead>
        </table>
      </div>
    )
  }
}

const MemberRow = (member: MemberEntity) => {
  return (
    <tr key={member.id}>
      <td>
        <img src={member.avatar_url} alt="" className="avatar"/>
      </td>
      <td><span>{member.id}</span></td>
      <td><span>{member.login}</span></td>
    </tr>
  )
}