import {put, takeLatest, all, call} from 'redux-saga/effects';
import {
    CREATE_POST,
    GET_POSTS,
    POSTS_SUCCESS,
    POST_NOTES_SUCCESS,
    DELETE_NOTES_SUCCESS, SAVE_POST,
} from "../actions/PostActions";
import * as axios from "axios";

const url = 'http://localhost:8000/notes';

const combineActions = {
    getNotes: (payload) => {
        return axios.get(url)
            .then(response => response)
            .catch(err => err)
    },
    postNotes: (payload) => {
        return axios.post(url, payload)
            .then(response => response)
            .catch(err => err)
    },
    deleteNotes: (payload) => {
        return axios.delete(`${url}/${payload.item}`)
    },
    putNotes: (payload) => {
        return axios.put(`${url}/${payload.itemId}`, payload)
            .then(response => response)
            .catch(err => err)
    }

};

function* getPosts(action) {
    try {
        const response = yield call(combineActions.getNotes, action.payload);
        if (response) {
            yield put({type: POSTS_SUCCESS, json: response.data});
        }
    } catch (err) {

    }
}

function* postPosts(action) {
    const item = {title: action.text, text: action.title};
    try {
        const response = yield call(combineActions.postNotes, item);
        if (response) {
            yield put({type: POST_NOTES_SUCCESS});
            yield put({type: GET_POSTS})
        }
    } catch (err) {
        // I need the error data here ..
    }
}

function* deletePosts(action) {
    try {
        const response = yield call(combineActions.deleteNotes, action);
        if (response) {
            yield put({type: GET_POSTS})
        }
    } catch (err) {
        // I need the error data here ..
    }
}

function* putPosts(action) {
    try {
        const response = yield call(combineActions.putNotes, action);
        if (response) {
            yield put({type: GET_POSTS})
        }
    } catch (err) {
        // I need the error data here ..
    }
}

function* actionWatcher() {
    yield takeLatest(GET_POSTS, getPosts);
    yield takeLatest(CREATE_POST, postPosts);
    yield takeLatest(DELETE_NOTES_SUCCESS, deletePosts);
    yield takeLatest(SAVE_POST, putPosts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

