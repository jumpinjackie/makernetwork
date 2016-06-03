import * as React from 'react';
import { IActivityItem, ActivityKind } from '../api/contracts';
import { Link } from 'react-router';
import { getRandomInt } from '../utils/random';
import moment = require('moment');

interface IActivityCardProps {
    activity: IActivityItem;
    slim?: boolean;
}

export default class ActivityCard extends React.Component<IActivityCardProps, any> {
    constructor(props) {
        super(props);
    }
    render(): JSX.Element {
        const { date, user, kind } = this.props.activity;
        const since = moment.utc(date).fromNow();
        const likes = getRandomInt(0, 20);
        const comments = getRandomInt(0, 20);

        if (this.props.slim === true) {
            return <div className="card">
                <div className="card-title p-l p-t">
                    <img className="img-circle img-thumbnail" src="http://lorempixel.com/64/64" width="64" height="64" alt="Avatar" />
                    <header style={{ display: "inline-block", padding: "8px", height: "auto", verticalAlign: "middle" }}>
                        <Link to={`/user/${user.id}`}><strong>{user.name}</strong></Link>
                        <p>{since}</p>
                    </header>
                </div>
                <div className="card-block">
                    <p className="card-text">{(() => {
                        switch (kind) {
                            case ActivityKind.AvailableTool:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> made a tool available</span>;
                            case ActivityKind.PublishedEvent:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> published an event</span>;
                            case ActivityKind.PublishedLocation:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> published a location</span>;
                            case ActivityKind.UserActivity:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> performed an activity</span>;
                        }
                    })()}</p>
                    <div className="clearfix"></div>
                </div>
            </div>;
        } else {
            return <div className="card">
                <div className="card-title p-l p-t">
                    <img className="img-circle img-thumbnail" src="http://lorempixel.com/64/64" width="64" height="64" alt="Avatar" />
                    <header style={{ display: "inline-block", padding: "8px", height: "auto", verticalAlign: "middle" }}>
                        <Link to={`/user/${user.id}`}><strong>{user.name}</strong></Link>
                        <p>{since}</p>
                    </header>
                </div>
                <div className="card-block">
                    <p className="card-text">{(() => {
                        switch (kind) {
                            case ActivityKind.AvailableTool:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> made a tool available</span>;
                            case ActivityKind.PublishedEvent:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> published an event</span>;
                            case ActivityKind.PublishedLocation:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> published a location</span>;
                            case ActivityKind.UserActivity:
                                return <span><Link to={`/user/${user.id}`}><strong>{user.firstName}</strong></Link> performed an activity</span>;
                        }
                    })()}</p>
                    <div className="card-text">
                        <a className="btn btn-sm btn-danger pull-left"><b>+{likes}</b></a>
                        <a className="btn btn-sm btn-primary pull-right"><i className="fa fa-comments-o"></i> {comments}</a>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="card-footer text-muted">
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Add Comment ..." />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button"><i className="fa fa-edit"></i></button>
                        </span>
                    </div>
                </div>
            </div>;
        }
    }
}