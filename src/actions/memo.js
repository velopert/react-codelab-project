import {
    MEMO_POST,
    MEMO_POST_SUCCESS,
    MEMO_POST_FAILURE,
    MEMO_LIST,
    MEMO_LIST_SUCCESS,
    MEMO_LIST_FAILURE,
    MEMO_EDIT,
    MEMO_EDIT_SUCCESS,
    MEMO_EDIT_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* MEMO POST */
export function memoPostRequest(contents) {
    return (dispatch) => {
        dispatch(memoPost());

        return axios.post('/api/memo/', { contents })
        .then((response) => {
            dispatch(memoPostSuccess());
        }).catch((error) => {
            dispatch(memoPostError(error.response.data.code));
        });
    };
}

export function memoPost() {
    return {
        type: MEMO_POST
    };
}

export function memoPostSuccess() {
    return {
        type: MEMO_POST_SUCCESS
    };
}

export function memoPostFailure(error) {
    return {
        type: MEMO_POST_FAILURE,
        error
    };
}

/* MEMO LIST */

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' memo or 'new' memo
        - id:        OPTIONAL; memo id (one at the bottom or one at the top)
        - username:  OPTIONAL; find memos of following user
*/
export function memoListRequest(isInitial, listType, id, username) {
    return (dispatch) => {
        // to be implemented
        dispatch(memoList());

        let url = '/api/memo';

        /* url setup depending on parameters,
           to  be implemented.. */
        if(typeof username === "undefined") {
            // username not given, load public memo
            url = isInitial ? url : `${url}/${listType}/${id}`;
            // or url + '/' + listType + '/' +  id
        } else {
            /* TO BE IMPLEMENTED */
        }

        return axios.get(url)
        .then((response) => {
            dispatch(memoListSuccess(response.data, isInitial, listType));
        }).catch((error) => {
            dispatch(memoListFailure());
        });

    };
}
export function memoList() {
    return {
        type: MEMO_LIST
    };
}

export function memoListSuccess(data, isInitial, listType) {
    return {
        type: MEMO_LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function memoListFailure() {
    return {
        type: MEMO_LIST_FAILURE
    };
}

/* MEMO EDIT */
export function memoEditRequest(id, index, contents) {
    return (dispatch) => {
        dispatch(memoEdit());

        return axios.put('/api/memo/' + id, { contents })
        .then((response) => {
            dispatch(memoEditSuccess(index, response.data.memo));
        }).catch((error) => {
            dispatch(memoEditFailure(error.response.data.code));
        });
    };
}

export function memoEdit() {
    return {
        type: MEMO_EDIT
    };
}

export function memoEditSuccess(index, memo) {
    return {
        type: MEMO_EDIT_SUCCESS,
        index,
        memo
    };
}

export function memoEditFailure(error) {
    return {
        type: MEMO_EDIT_FAILIURE,
        error
    };
}
