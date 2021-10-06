import counterReducers from './familyMembers';
import loggedReducers from './islogged';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    familyMembersReducer: counterReducers,
    myStatus: loggedReducers
});
export default rootReducers;