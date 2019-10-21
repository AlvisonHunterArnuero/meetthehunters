import counterReducers from './counter';
import loggedReducers from './islogged';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    Members: counterReducers,
    myStatus: loggedReducers
});
export default rootReducers;