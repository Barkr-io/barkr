
import {LOG_IN} from '../constants/actionsTypes';
import {SIGN_UP} from '../constants/actionsTypes';

export const login = user => {
    return {
        type: LOG_IN,
        payload: user
    }
};

export const signup = user => {
    return {
        type: SIGN_UP,
        payload: user
    }
};