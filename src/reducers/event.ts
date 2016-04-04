import { 
    EVENT_LOAD_PENDING,
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_ERROR 
} from '../constants';
import { IUserInfo } from '../api/contracts';

import { fromJS, List } from 'immutable';

const INITIAL_STATE = fromJS({
    event: null,
    hasError: false,
    errorMessage: null,
    isLoading: true
})

export default function eventReducer(state = INITIAL_STATE, action = { type: '', payload: null }) {
    switch (action.type) {
        case EVENT_LOAD_PENDING:
            return state.merge(fromJS({
                hasError: false,
                isLoading: true
            }));
        case EVENT_LOAD_SUCCESS:
            let newState = state.merge(fromJS({
                event: action.payload,
                hasError: false,
                isLoading: false
            }));
            return newState;
        case EVENT_LOAD_ERROR:
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