import _ from 'lodash';

import {FETCH_POLLS} from '../constants/action_types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POLLS:
            return _.mapKeys(action.payload.data.polls, '_id');
        default:
            return state;
    }
}