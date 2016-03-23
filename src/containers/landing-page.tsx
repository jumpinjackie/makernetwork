import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/session';
import LoginForm from '../components/login/login-form';
import Testimonials from '../components/testimonials';

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LandingPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render(): JSX.Element {
    const { children, session, login } = this.props;
    return <main>
      <div className="clearfix">
        <div className="col-12">
          <h1 className="center">Welcome to the Maker Network</h1>
        </div>
        <div className="md-col md-col-6 p2">
          <h2 className="center">About</h2>
          <p className="center">A community for makers to share, 
          collaborate and learn</p>
          <Testimonials interval={7000} />
        </div>
        <div className="md-col md-col-6 p2">
          <h2 className="center">Login</h2>
          <LoginForm onSubmit={login} 
                     hasError={session.get('hasError', false)} 
                     isPending={session.get('isLoading', false)} />
        </div>
      </div>
    </main>;
  }
}
