import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';

interface IAboutPageProps extends React.Props<any> {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AboutPage extends React.Component<IAboutPageProps, void> {
  render() {
    return (
      <Container size={4} center>
        <h2 className="caps">About The Maker Network</h2>
        <p>
          Creating a space for makers to share, collaborate and learn
        </p>
      </Container>
    );
  }
};
