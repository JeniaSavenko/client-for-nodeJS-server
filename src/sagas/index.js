import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import * as axios from 'axios';
import {
  GET_POSTS, POSTS_SUCCESS, DELETE_NOTES_SUCCESS, SAVE_POST, ERROR_GET_POSTS,
} from '../actions/PostActions';

const url = 'http://localhost:3000';

const getNotes = () => axios.get(url)
  .then(response => response)
  .catch(err => err);

const deleteNotes = payload => axios.delete(`${url}/${payload.item}`);

const putNotes = payload => axios.put(`${url}/${payload.itemId}`, payload)
  .then(response => response)
  .catch(err => err);

function* getPosts(action) {
  try {
    const response = yield call(getNotes, action.payload);
    if (response) {
      yield put({ type: POSTS_SUCCESS, json: response.data });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

function* deletePosts(action) {
  try {
    const response = yield call(deleteNotes, action);
    if (response) {
      yield put({ type: GET_POSTS });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

function* putPosts(action) {
  try {
    const response = yield call(putNotes, action);
    if (response) {
      yield put({ type: GET_POSTS });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

function* actionWatcher() {
  yield takeLatest(GET_POSTS, getPosts);
  yield takeLatest(DELETE_NOTES_SUCCESS, deletePosts);
  yield takeLatest(SAVE_POST, putPosts);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
