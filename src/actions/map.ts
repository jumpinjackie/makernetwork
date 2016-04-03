import { getActivitiesSince } from '../api/map';
import { 
    MAP_GET_ACTIVITIES_SINCE_PENDING,
    MAP_GET_ACTIVITIES_SINCE_SUCCESS,
    MAP_GET_ACTIVITIES_SINCE_ERROR 
} from '../constants';

export function fetchActivitiesSince() {
    return (dispatch, getState) => {
        const since: string = getState().since;
        return dispatch({
            types: [
                MAP_GET_ACTIVITIES_SINCE_PENDING,
                MAP_GET_ACTIVITIES_SINCE_SUCCESS,
                MAP_GET_ACTIVITIES_SINCE_ERROR 
            ],
            payload: {
                promise: getActivitiesSince(since).then(res => res)
            }
        });
    };
}