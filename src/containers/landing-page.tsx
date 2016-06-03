import * as React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../components/signup-form';
import Testimonials from '../components/testimonials';

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LandingPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render(): JSX.Element {
    const { children, session, login } = this.props;
    return <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <h1 className="text-center">Welcome to the Maker Network</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <h2 className="text-center">About</h2>
          <p className="text-center">A community for makers to share, 
          collaborate and learn</p>
          <Testimonials interval={7000} />
        </div>
        <div className="col-md-5">
          <h2 className="text-center">Join Us</h2>
          <SignUpForm hasError={false} 
                      isPending={false} />
        </div>
      </div>
    </div>;
  }
}
