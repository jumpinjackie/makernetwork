import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { IActivityItem, ActivityKind } from '../api/contracts';
import { fetchActivitiesSince } from '../actions/home';

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

export const ActivityHeadline = (activity: IActivityItem) => {
    switch(activity.kind) {
        case ActivityKind.AvailableTool:
            return <p className="m0"><Link to={`/user/${activity.user.id}`}><strong>{activity.user.name}</strong></Link> made a tool available</p>;
        case ActivityKind.PublishedEvent:
            return <p className="m0"><Link to={`/user/${activity.user.id}`}><strong>{activity.user.name}</strong></Link> published an event</p>;
        case ActivityKind.PublishedLocation:
            return <p className="m0"><Link to={`/user/${activity.user.id}`}><strong>{activity.user.name}</strong></Link> published a location</p>;
        case ActivityKind.UserActivity:
            return <p className="m0"><Link to={`/user/${activity.user.id}`}><strong>{activity.user.name}</strong></Link> performed an activity</p>;
    }
    return <p className="m0">(${activity.kind})<Link to={`/user/${activity.user.id}`}><strong>{activity.user.name}</strong></Link></p>;
}

export const ActivityCard = (props: IActivityItem) => {
  return <div className="flex col-6 sm-col-4 md-col-3 lg-col-2 p2">
    <div className="p1 border rounded">
      <img src="//placehold.it/256" />
      <ActivityHeadline {...props} />
      <p className="m0" title={props.date}>{moment.utc(props.date).fromNow()}</p>
    </div>
  </div>;
};

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
        {activities.map(act => <ActivityCard key={act.id} {...act}/>)}
      </div>;
    }
    
    return <div className="p2">
      {body}
    </div>;
  }
}
