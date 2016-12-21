import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducers from './authReducers';
import trackReducers from './trackReducers';

export default combineReducers({
    authReducers,
    trackReducers,
    routing: routerReducer
});
