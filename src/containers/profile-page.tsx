import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';
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
    fetchProfile: (id) => dispatch(fetchProfile(id))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProfilePage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProfile(this.props.routeParams.id);
  }
  render() {
    const { children, session, profile, router } = this.props;
    const isPending = profile.get("isLoading", false);
    const hasError = profile.get("hasError", false);
    
    let body = null;
    if (isPending) {
      body = <h1>Loading ...</h1>;
    } else if (hasError) {
      const errorMessage = profile.get("errorMessage", false);
      body = <div>
        <h1>An error occurred</h1>
        <p>{errorMessage}</p>
      </div>;
    } else {
      const userInfo = profile.get("userInfo", false);
      const isMe = userInfo.get("id") == session.getIn(['user', 'id'], '');
      body = <div>
        <h2 className="caps">Profile - {userInfo.get('name')} {isMe ? ' (You)': ''}</h2>
        <p>User profile goes here</p>
      </div>;
    }
    
    return (
      <Container size={4} center>
        {body}
      </Container>
    );
  }
};
