import * as React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { IActivityItem, ActivityKind } from '../api/contracts';
import { fetchActivitiesSince } from '../actions/map';
import ActivityCard from '../components/activity-card';
import SplitPane = require('react-split-pane');
import { AutoSizer, VirtualScroll } from 'react-virtualized';

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

const ACTIVITY_ROW_ITEM_HEIGHT = 135;

@connect(mapStateToProps, mapDispatchToProps)
export default class MapPage extends React.Component<any, any> {
  fnRowRenderer: Function;
  fnNoRowsRenderer: Function;
  fnRowHeight: Function;
  constructor(props) {
    super(props);
    this.fnNoRowsRenderer = this.noRowsRenderer.bind(this);
    this.fnRowHeight = this.calculateRowHeight.bind(this);
    this.fnRowRenderer = this.rowRenderer.bind(this);
  }
  rowRenderer({index, isScrolling}) {
    if (isScrolling) {
      return <div style={{ height: ACTIVITY_ROW_ITEM_HEIGHT }}>
        ...
      </div>;
    } else {
      const { children, session, map } = this.props;
      const activities = map.get("activities");
      const act = activities.get(index);
      if (act != null) {
        return <div style={{ height: ACTIVITY_ROW_ITEM_HEIGHT }}>
          <ActivityCard activity={act} slim={true} />
        </div>;
      } else {
        return <div style={{ height: ACTIVITY_ROW_ITEM_HEIGHT }}>
          ...
        </div>;
      }
    }
  }
  noRowsRenderer() {
    return <div>
      <Alert bsStyle="info">No activities found</Alert>
    </div>;
  }
  calculateRowHeight() {
    return ACTIVITY_ROW_ITEM_HEIGHT;
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
      body = <h1><i className="fa fa-refresh fa-spin" /> Loading ...</h1>;
    } else if (hasError) {
      body = <div>
        <h1>An error occurred</h1>
      </div>;
    } else {
      const activities = map.get("activities", false);
      const center = map.get("center", false);
      const centerPt = { lat: center.get("lat"), lon: center.get("lon") };
      body = <SplitPane split="vertical" defaultSize="33%">
            <AutoSizer>
            {({ width, height}) => (
                <VirtualScroll overscanRowCount={20}
                              rowRenderer={this.fnRowRenderer}
                              noRowsRenderer={this.fnNoRowsRenderer}
                              rowCount={activities.count()}
                              rowHeight={this.fnRowHeight}
                              width={width}
                              height={height} />
            )}
            </AutoSizer>
            <AutoSizer>
            {({ width, height}) => (
                <Map style={{ width: width, height: height }} center={centerPt} zoom={13}>
                    <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                    {activities.map(act => <Marker key={act.id} position={act.location}><Popup><ActivityCard activity={act} /></Popup></Marker>)}
                </Map>
            )}
            </AutoSizer>
      </SplitPane>;
      /*
      body = <div className="row">
        <div className="col-md-3">
          {activities.map(act => <ActivityListItem key={act.id} {...act} />)}
        </div>
        <div className="col-md-9">
          <Map center={centerPt} zoom={13}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            {activities.map(act => <Marker key={act.id} position={act.location}><Popup><ActivityCard activity={act} /></Popup></Marker>)}
          </Map>
        </div>
      </div>;
      */
    }
    return body;
  }
}
