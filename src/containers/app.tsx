import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/session';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Button, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Logo from '../components/logo';
import LandingPage from '../containers/landing-page';
import LoginForm from '../components/login/login-form';

interface IAppProps extends React.Props<any> {
  session: any;
  login: () => void;
  logout: () => void;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<IAppProps, void> {
  render() {
    const { children, session, login, logout } = this.props;
    const token = session.get('token', false);
    const isLoggedIn = token && token !== null && typeof token !== 'undefined';
    const firstName = session.getIn(['user', 'firstName'], '');
    const lastName = session.getIn(['user', 'lastName'], '');
    const id = session.getIn(['user', 'id'], '');
    
    let loggedInMenu = null;
    let loggedInSection = null;
    if (isLoggedIn) {
      loggedInMenu = <Nav>
        <IndexLinkContainer to="/" activeClassName="active">
          <NavItem><i className="fa fa-home" /> Home</NavItem>
        </IndexLinkContainer> 
        <LinkContainer to="/map" activeClassName="active">
          <NavItem><i className="fa fa-map" /> Map</NavItem>
        </LinkContainer> 
        <LinkContainer to="/about" activeClassName="active">
          <NavItem><i className="fa fa-info-circle" /> About Us</NavItem>
        </LinkContainer>
      </Nav>;
      loggedInSection = <Nav pullRight>
        <LinkContainer to={`/user/${id}`} activeClassName="active">
          <NavItem><i className="fa fa-user" /> { `${ firstName } ${ lastName }` }</NavItem>
        </LinkContainer>
        <NavItem onClick={ logout }>
          <i className="fa fa-power-off" /> Logout
        </NavItem>
      </Nav>;
    } else {
      loggedInSection = <Nav pullRight>
        <Navbar.Form pullRight>          
          <LoginForm slim={true}
                     onSubmit={login} 
                     hasError={session.get('hasError', false)} 
                     isPending={session.get('isLoading', false)} />
        </Navbar.Form>
      </Nav>;
    }
    
    let body = null;
    if (isLoggedIn) {
      body = <div className="container-fluid">
        { children }
      </div>;
    } else {
      body = <LandingPage />;
    }

    return (
      <div>
        <Navbar inverse fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Maker Network</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            { loggedInMenu }
            { loggedInSection }
          </Navbar.Collapse>
        </Navbar>
        {body}
      </div>
    );
  };
};
