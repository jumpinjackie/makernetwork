import { getActivitiesSince } from '../api/home';
import { 
    HOME_GET_ACTIVITIES_SINCE_PENDING,
    HOME_GET_ACTIVITIES_SINCE_SUCCESS,
    HOME_GET_ACTIVITIES_SINCE_ERROR 
} from '../constants';

export function fetchActivitiesSince() {
    return (dispatch, getState) => {
        const since: string = getState().since;
        return dispatch({
            types: [
                HOME_GET_ACTIVITIES_SINCE_PENDING,
                HOME_GET_ACTIVITIES_SINCE_SUCCESS,
                HOME_GET_ACTIVITIES_SINCE_ERROR 
            ],
            payload: {
                promise: getActivitiesSince(since).then(res => res)
            }
        });
    };
}