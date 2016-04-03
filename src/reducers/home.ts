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
    isLoading: false
})

const ACTIVITY_DATE_SORT_COMPARATOR = (a: IActivityItem, b: IActivityItem) => {
    return a.date.localeCompare(b.date);
}

const INVERTED_ACTIVITY_DATE_SORT_COMPARATOR = (a: IActivityItem, b: IActivityItem) => {
    let result = ACTIVITY_DATE_SORT_COMPARATOR(a, b);
    if (result > 0)
        return -1;
    else if (result < 0)
        return 1;
    else
        return 0;
};

function getEarliestDate(activities: IActivityItem[]): string {
    if (activities != null && activities.length > 0) {
        return activities.sort(ACTIVITY_DATE_SORT_COMPARATOR)[0].date;
    } else {
        return null;
    }
}

function combineActivities(currentActivities: IActivityItem[], newActivities: IActivityItem[]): List<IActivityItem> {
    if (currentActivities == null) {
        return List(newActivities || []);
    } else {
        //NOTE: Will currently have potential for duplicates as a result of
        //overlapping dates
        let left = List(currentActivities || []);
        let right = List((newActivities || []).sort(INVERTED_ACTIVITY_DATE_SORT_COMPARATOR));
        return left.concat(right).toList();
    }
}

export default function homeReducer(state = INITIAL_STATE, action = { type: '', payload: null }) {
    switch (action.type) {
        case HOME_GET_ACTIVITIES_SINCE_PENDING:
            return state.merge(fromJS({
                hasError: false,
                isLoading: true
            }));
        case HOME_GET_ACTIVITIES_SINCE_SUCCESS:
            let newState = state.merge(fromJS({
                since: getEarliestDate(action.payload),
                activities: combineActivities(state.get("activities"), action.payload),
                hasError: false,
                isLoading: false
            }));
            return newState;
        case HOME_GET_ACTIVITIES_SINCE_ERROR:
            return state.merge(fromJS({
                hasError: true,
                isLoading: false
            }));
        default:
            return state;
    }
}