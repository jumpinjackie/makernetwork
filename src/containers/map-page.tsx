import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { IActivityItem, ActivityKind } from '../api/contracts';
import { fetchActivitiesSince } from '../actions/map';

import 'leaflet/dist/leaflet.css';

function mapStateToProps(state) {
  return {
    session: state.session,
    map: state.map,
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
      <p className="m0" title={props.date}>{moment.utc(props.date).fromNow()}</p>
    </div>
  </div>;
};

const ActivityListItem = (props: IActivityItem) => {
  return <div className="m1 p1 border rounded">
    <ActivityHeadline {...props} />
    <p className="m0" title={props.date}>{moment.utc(props.date).fromNow()}</p>
  </div>;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MapPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchActivitiesSince();
  }
  render(): JSX.Element {
    const { children, session, map } = this.props;
    const activities = map.get("activities", false);
    const isPending = map.get("isPending", false);
    const hasError = map.get("hasError", false);
    const center = map.get("center", false);
    const centerPt = { lat: center.get("lat"), lon: center.get("lon") };
    return <div className="p2">
      <div className="flex flex-wrap mxn2">
        <div className="col-3 p1">
          {activities.map(act => <ActivityListItem key={act.id} {...act} />)}
        </div>
        <Map center={centerPt} zoom={13} className="col-9 flex p1">
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          {activities.map(act => <Marker key={act.id} position={act.location}><Popup><ActivityCard {...act} /></Popup></Marker>)}
        </Map>
      </div>
    </div>;
  }
}
