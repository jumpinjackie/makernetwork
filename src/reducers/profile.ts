import { 
    PROFILE_LOAD_PENDING,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_ERROR 
} from '../constants';
import { IUserInfo } from '../api/contracts';

import { fromJS, List } from 'immutable';

const INITIAL_STATE = fromJS({
    userInfo: null,
    hasError: false,
    errorMessage: null,
    isLoading: true
})

export default function profileReducer(state = INITIAL_STATE, action = { type: '', payload: null }) {
    switch (action.type) {
        case PROFILE_LOAD_PENDING:
            return state.merge(fromJS({
                hasError: false,
                isLoading: true
            }));
        case PROFILE_LOAD_SUCCESS:
            let newState = state.merge(fromJS({
                userInfo: action.payload,
                hasError: false,
                isLoading: false
            }));
            return newState;
        case PROFILE_LOAD_ERROR:
            return state.merge(fromJS({
                userInfo: null,
                errorMessage: action.payload,
                hasError: true,
                isLoading: false
            }));
        default:
            return state;
    }
}