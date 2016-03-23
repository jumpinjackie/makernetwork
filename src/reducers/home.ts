import { 
    HOME_GET_ACTIVITIES_SINCE_PENDING,
    HOME_GET_ACTIVITIES_SINCE_SUCCESS,
    HOME_GET_ACTIVITIES_SINCE_ERROR 
} from '../constants';
import { IActivityItem } from '../api/contracts';

import { fromJS, List } from 'immutable';

const INITIAL_STATE = fromJS({
    since: null,
    activities: [],
    hasError: false,
    isLoading: false,
    debug: ''
})

function getEarliestDate(activities: IActivityItem[]): string {
    if (activities != null && activities.length > 0) {
        return activities.sort((a, b) => a.date.localeCompare(b.date))[0].date;
    } else {
        return null;
    }
}

function combineActivities(currentActivities: IActivityItem[], newActivities: IActivityItem[]) {
    if (currentActivities == null) {
        return newActivities || [];
    } else {
        //NOTE: Will currently have potential for duplicates as a result of
        //overlapping dates
        return currentActivities.concat(newActivities || []);
    }
}

export default function homeReducer(state = INITIAL_STATE, action = { type: '', payload: null }) {
    switch (action.type) {
        case HOME_GET_ACTIVITIES_SINCE_PENDING:
            return state.merge(fromJS({
                hasError: false,
                isLoading: true,
                debug: HOME_GET_ACTIVITIES_SINCE_PENDING
            }));
        case HOME_GET_ACTIVITIES_SINCE_SUCCESS:
            return state.merge(fromJS({
                since: getEarliestDate(action.payload.activities),
                activities: List.of<IActivityItem>(action.payload.activities), //combineActivities(state.activities, action.payload.activities),
                hasError: false,
                isLoading: false,
                debug: HOME_GET_ACTIVITIES_SINCE_SUCCESS
            }));
        case HOME_GET_ACTIVITIES_SINCE_ERROR:
            return state.merge(fromJS({
                hasError: true,
                isLoading: false,
                debug: HOME_GET_ACTIVITIES_SINCE_ERROR
            }));
        default:
            return state;
    }
}