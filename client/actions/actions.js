import { LOG_IN } from '../constants/actionTypes';
import { SIGN_UP } from '../constants/actionTypes';

export const login = userInfo => ({
    type: LOG_IN, 
    payload: userInfo
})

export const signUp = userInfo => ({
    type: SIGN_UP, 
    payload: userInfo
})