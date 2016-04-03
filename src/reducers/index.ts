import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import home from './home';
import map from './map';
import profile from './profile';

const rootReducer = combineReducers({
  home,
  session,
  routing: routerReducer,
  form: formReducer,
  map,
  profile
});


export default rootReducer;
