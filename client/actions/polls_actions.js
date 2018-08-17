import axios from 'axios';

import {FETCH_POLLS} from '../constants/action_types';
const ROOT_URL = 'https://polar-journey-68397.herokuapp.com/';

export function fetch_polls() {
    return (dispatch) => {
        const request = axios.get(`${ROOT_URL}polls/`);
        dispatch({
            type: FETCH_POLLS,
            payload: request
        });
    }
}