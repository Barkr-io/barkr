import { LOG_IN } from '../constants/actionTypes';
import { SIGN_UP } from '../constants/actionTypes';

let initialState = {
    isLoggedIn: false,
    userData: {},
    dogData: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case LOG_IN:
        case SIGN_UP:
        default:
            return state;
    }
}