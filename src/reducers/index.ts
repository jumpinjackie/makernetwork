import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import home from './home';

const rootReducer = combineReducers({
  home,
  session,
  routing: routerReducer,
  form: formReducer,
});


export default rootReducer;
