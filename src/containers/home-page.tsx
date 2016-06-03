import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { IActivityItem, ActivityKind } from '../api/contracts';
import { fetchActivitiesSince } from '../actions/home';
import ActivityCard from '../components/activity-card';

function mapStateToProps(state) {
  return {
    session: state.session,
    home: state.home,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchActivitiesSince: () => dispatch(fetchActivitiesSince())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchActivitiesSince();
  }
  render(): JSX.Element {
    const { children, session, home } = this.props;
    const isPending = home.get("isLoading", false);
    const hasError = home.get("hasError", false);
    let body = null;
    if (isPending) {
      body = <h1><i className="fa fa-refresh fa-spin" /> Loading ...</h1>;
    } else if (hasError) {
      body = <div>
        <h1>An error occurred</h1>
      </div>;
    } else {
      const activities = home.get("activities", false);
      body = <div className="flex flex-wrap mxn2">
        {activities.map(act => <ActivityCard key={act.id} activity={act}/>)}
      </div>;
    }
    
    return <div className="p2">
      {body}
    </div>;
  }
}
