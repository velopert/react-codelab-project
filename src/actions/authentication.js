import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

/* ====== AUTH ====== */

/* LOGIN */
export function loginRequest(username, password) {
    /* to be implemented */
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILIURE
    };
}
