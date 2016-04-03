import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { IActivityItem, ActivityKind } from '../api/contracts';
import { fetchActivitiesSince } from '../actions/map';
import { ActivityCard, ActivityHeadline } from './home-page';

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
    const isPending = map.get("isLoading", false);
    const hasError = map.get("hasError", false);
    let body = null;
    if (isPending) {
      body = <h1>Loading ...</h1>
    } else if (hasError) {
      body = <div>
        <h1>An error occurred</h1>
      </div>;
    } else {
      const activities = map.get("activities", false);
      const center = map.get("center", false);
      const centerPt = { lat: center.get("lat"), lon: center.get("lon") };
      body = <div className="flex flex-wrap mxn2">
        <div className="col-3 p1">
          {activities.map(act => <ActivityListItem key={act.id} {...act} />)}
        </div>
        <Map center={centerPt} zoom={13} className="col-9 flex p1">
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          {activities.map(act => <Marker key={act.id} position={act.location}><Popup><ActivityCard {...act} /></Popup></Marker>)}
        </Map>
      </div>;
    }
    return <div className="p2">
      {body}
    </div>;
  }
}
