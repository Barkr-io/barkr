import {LOG_IN} from '../constants/actionsTypes';
import {SIGN_UP} from '../constants/actionsTypes';
require('babel-core/register')
require('babel-polyfill')

export const login = user => async dispatch => {
    console.log(user);
    
    const result = await fetch('http://localhost:3000/user',{
        method:'POST',
        body:JSON.stringify(user),
        headers: {'Content-Type':'application/json'}
    })
    .then(res=>res.json())
    console.log(result);
    
}


export const signup = user => {
    return {
        type: SIGN_UP,
        payload: user
    }
};
