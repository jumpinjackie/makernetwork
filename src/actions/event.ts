import { getEventDetails } from '../api/event';
import { 
    EVENT_LOAD_PENDING,
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_ERROR 
} from '../constants';

export function fetchEvent(id: number) {
    return (dispatch, getState) => {
        return dispatch({
            types: [
                EVENT_LOAD_PENDING,
                EVENT_LOAD_SUCCESS,
                EVENT_LOAD_ERROR 
            ],
            payload: {
                promise: getEventDetails(id).then(res => res)
            }
        });
    };
}