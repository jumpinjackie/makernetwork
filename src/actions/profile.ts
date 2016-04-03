import { getUserProfile } from '../api/profile';
import { 
    PROFILE_LOAD_PENDING,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_ERROR 
} from '../constants';

export function fetchProfile(id: number) {
    return (dispatch, getState) => {
        return dispatch({
            types: [
                PROFILE_LOAD_PENDING,
                PROFILE_LOAD_SUCCESS,
                PROFILE_LOAD_ERROR 
            ],
            payload: {
                promise: getUserProfile(id).then(res => res)
            }
        });
    };
}