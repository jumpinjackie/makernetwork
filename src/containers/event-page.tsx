import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';
import { fetchEvent } from '../actions/event';

function mapStateToProps(state) {
  return {
    session: state.session,
    event: state.event,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: (id) => dispatch(fetchEvent(id))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class EventPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchEvent(this.props.routeParams.id);
  }
  render() {
    const { children, session, event, router } = this.props;
    const isPending = event.get("isLoading", false);
    const hasError = event.get("hasError", false);
    
    let body = null;
    if (isPending) {
      body = <h1>Loading Event Details ...</h1>;
    } else if (hasError) {
      const errorMessage = event.get("errorMessage", false);
      body = <div>
        <h1>An error occurred</h1>
        <p>{errorMessage}</p>
      </div>;
    } else {
      const eventInfo = event.get("event");
      body = <div>
        <h2 className="caps">Event - {eventInfo.get('name')}</h2>
        <p>Event details goes here</p>
      </div>;
    }
    
    return (
      <Container size={4} center>
        {body}
      </Container>
    );
  }
};
