import * as React from 'react';
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

const ActivityHeadline = (activity: IActivityItem) => {
    switch(activity.kind) {
        case ActivityKind.AvailableTool:
            return <p className="m0"><strong>{activity.user}</strong> made a tool available</p>;
        case ActivityKind.PublishedEvent:
            return <p className="m0"><strong>{activity.user}</strong> published an event</p>;
        case ActivityKind.PublishedLocation:
            return <p className="m0"><strong>{activity.user}</strong> published a location</p>;
        case ActivityKind.UserActivity:
            return <p className="m0"><strong>{activity.user}</strong> performed an activity</p>;
    }
    return <p className="m0">(${activity.kind} ${activity.user})</p>;
}

const ActivityCard = (props: IActivityItem) => {
  return <div className="flex col-6 sm-col-4 md-col-3 lg-col-2 p2">
    <div className="p1 border rounded">
      <img src="//placehold.it/256" />
      <ActivityHeadline {...props} />
      <p className="m0">{props.date}</p>
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
    const activities = home.get("activities", false);
    const isPending = home.get("isPending", false);
    const hasError = home.get("hasError", false);
    return <div className="p2">
      <div className="flex flex-wrap mxn2">
        {activities.map(act => <ActivityCard key={act.id} {...act}/>)}
      </div>
    </div>;
  }
}
