import axios from 'axios';

import {FETCH_POLLS} from '../constants/action_types';
const ROOT_URL = 'https://polar-journey-68397.herokuapp.com/';

export function fetchPolls() {
    return (dispatch) => {
        const request = axios.get(`${ROOT_URL}polls/`);
        dispatch({
            type: FETCH_POLLS,
            payload: request
        });
    }
}

export function updateVote(poll, option)  {
    return (dispatch) => {
        poll.options[option].vote++;
        const request = axios.patch(`${ROOT_URL}polls/${poll._id}`, poll);
        dispatch({
            type: UPDATE_VOTE,
            payload: request
        })
    }
}