import {put, takeLatest, all, call} from 'redux-saga/effects';
import {
    CREATE_POST,
    GET_POSTS,
    POSTS_SUCCESS,
    POST_NOTES_SUCCESS,
    DELETE_NOTES_SUCCESS,
} from "../actions/PostActions";
import * as axios from "axios";

const getNotes = (payload) => {
    return axios.get('http://localhost:8000/notes')
        .then(response => response)
        .catch(err => err)
}

const postNotes = (payload) => {
    return axios.post('http://localhost:8000/notes', payload)
        .then(response => response)
        .catch(err => err)
}
const deleteNotes = (payload) => {
    console.log('zalupa', payload.item)
    return axios.delete(`http://localhost:8000/notes/${payload.item}`)
}

function* getPosts(action) {
    try {
        const response = yield call(getNotes, action.payload);
        if (response) {
            yield put({type: POSTS_SUCCESS, json: response.data});
        }
    } catch (err) {
        // I need the error data here ..
    }
}

function* postPosts(action) {
    const item = {title: action.text, text: action.title};
    try {
        const response = yield call(postNotes, item);
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
        const response = yield call(deleteNotes, action);
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
    yield takeLatest(DELETE_NOTES_SUCCESS, deletePosts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

