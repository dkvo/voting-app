import {combineReducers} from 'redux';
import pollsReducer from './polls_reducer';

const reducers = combineReducers({
    polls: pollsReducer
});

export default reducers;