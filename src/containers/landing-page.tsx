import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/session';
import LoginForm from '../components/login/login-form';

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
          <p className="center">As dry as a brizzie no dramas as cunning as a 
          ford. As busy as a clucky where shazza got us some rage on. Flat out 
          like a two up no worries lets throw a dunny. cranky mate mad as a 
          rage on. Shazza got us some cracker to it'll be spag bol. As dry as 
          a aussie salute no worries as busy as a down under. You little 
          ripper cleanskin how she'll be right oldies. Shazza got us some 
          mappa tassie mate lets get some bush oyster. Grab us a cane toad 
          with lets get some vb. Stands out like a brickie built like a dill.
          </p>
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
