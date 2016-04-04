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
      body = <h1><i className="fa fa-refresh fa-spin" /> Loading ...</h1>
    } else if (hasError) {
      body = <div>
        <h1>An error occurred</h1>
      </div>;
    } else {
      const activities = map.get("activities", false);
      const center = map.get("center", false);
      const centerPt = { lat: center.get("lat"), lon: center.get("lon") };
      body = <div className="row">
        <div className="col-md-3">
          {activities.map(act => <ActivityListItem key={act.id} {...act} />)}
        </div>
        <div className="col-md-9">
          <Map center={centerPt} zoom={13}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            {activities.map(act => <Marker key={act.id} position={act.location}><Popup><ActivityCard {...act} /></Popup></Marker>)}
          </Map>
        </div>
      </div>;
    }
    return <div className="container-fluid">
      {body}
    </div>;
  }
}
