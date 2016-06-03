import * as React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';

function mapStateToProps(state) {
  return {
    session: state.session,
    profile: state.profile,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProfile: (id: number) => dispatch(fetchProfile(id))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProfilePage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProfile(parseInt(this.props.routeParams.id, 10));
  }
  render() {
    const { children, session, profile, router } = this.props;
    const isPending = profile.get("isLoading", false);
    const hasError = profile.get("hasError", false);
    
    let body = null;
    if (isPending) {
      body = <h1><i className="fa fa-refresh fa-spin" /> Loading ...</h1>;
    } else if (hasError) {
      const errorMessage = profile.get("errorMessage", false);
      body = <div>
        <h1>An error occurred</h1>
        <p>{errorMessage}</p>
      </div>;
    } else {
      const userInfo = profile.get("userInfo", false);
      const isMe = userInfo.get("id") === session.getIn(['user', 'id'], '');
      body = <div>
        <h2 className="caps">Profile - {userInfo.get('name')} {isMe ? ' (You)' : ''}</h2>
        <p>User profile goes here</p>
        <p>TODO: Show activities by this user</p>
      </div>;
    }
    
    return (
      <div className="container-fluid">
        {body}
      </div>
    );
  }
};
