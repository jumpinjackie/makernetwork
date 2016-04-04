import * as React from 'react';
import { connect } from 'react-redux';

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
      <div className="container-fluid">
        <h2 className="caps">About The Maker Network</h2>
        <p>
          Creating a space for makers to share, collaborate and learn
        </p>
      </div>
    );
  }
};
