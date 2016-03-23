import * as React from 'react';
import { connect } from 'react-redux';

export default class HomePage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render(): JSX.Element {
    const { children, session, login } = this.props;
    return <main>
      <p>Activity stream goes here</p>
    </main>;
  }
}
