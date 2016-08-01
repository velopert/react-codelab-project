import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    register: {
        status: 'INIT',
        error: -1
    },
    status: {
        isLoggedIn: false,
        currentUser: ''
    }
};


export default function authentication(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
        /* LOGIN */
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING '}
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: true },
                    currentuser: { $set: action.username }
                }
            });
        case types.AUTH_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });

        /* REGISTER */
        case types.AUTH_REGISTER:
            return update(state, {
                register: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1}
                }
            });
        case types.AUTH_REGISTER_SUCCESS:
            return update(state, {
                register: {
                    status: { $set: 'SUCCESS' },
                }
            });
        case types.AUTH_REGISTER_FAILURE:
            return update(state, {
                register: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        default:
            return state;
    }
}
