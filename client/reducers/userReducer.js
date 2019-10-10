import {LOG_IN} from '../constants/actionsTypes';
import {SIGN_UP} from '../constants/actionsTypes';

let initialState = {
    userInfo: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN :
        case SIGN_UP :
        default: 
            return state;
    }
}