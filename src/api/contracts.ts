export interface IUserInfo {
    name: string;
    firstName: string;
    id: any;
}

export interface IEventInfo {
    id: any;
    name: string;
}

export interface IEventDetails extends IEventInfo {
    
}

/**
 * Denotes the kind of activity stream items
 */
export enum ActivityKind {
    /**
     * An event is on
     */
    PublishedEvent,
    /**
     * A location-specific event
     */
    PublishedLocation,
    /**
     * An available tool
     */
    AvailableTool,
    /**
     * A user-published activity
     */
    UserActivity
}

/**
 * A geographic coordinate
 */
export type GeographicCoordinate = { lat: number, lon: number };

/**
 * Denotes an activity stream item
 */
export interface IActivityItem {
    /**
     * Activity id
     */
    id: string;
    /**
     * The UTC date this activity was published
     */
    date: string;
    /**
     * The kind of activity
     */
    kind: ActivityKind;
    /**
     * The user this activity item relates to
     */
    user: IUserInfo;
    /**
     * An image thumbnail that is a photo summary of this item
     */
    thumbnail: string;
    /**
     * A textual description of this item
     */
    description: string;
    /**
     * The location of this activity
     */
    location?: GeographicCoordinate;
    /**
     * If the activity kind is an event, the summary of the event
     */
    event?: IEventInfo;
}