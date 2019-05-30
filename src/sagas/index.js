import {
  put, takeLatest, all, call
} from 'redux-saga/effects';
import * as axios from 'axios';
import {
  CREATE_POST,
  GET_POSTS,
  POSTS_SUCCESS,
  POST_NOTES_SUCCESS,
  DELETE_NOTES_SUCCESS, SAVE_POST, ERROR_GET_POSTS,
} from '../actions/PostActions';

const url = 'http://localhost:5000/notes';

const combineRequests = {
  getNotes: () => axios.get(url)
    .then(response => response)
    .catch(err => err),

  postNotes: payload => axios.post(url, payload)
    .then(response => response)
    .catch(err => err),

  deleteNotes: payload => axios.delete(`${url}/${payload.item}`),

  putNotes: payload => axios.put(`${url}/${payload.itemId}`, payload)
    .then(response => response)
    .catch(err => err)

};

function* getPosts(action) {
  try {
    const response = yield call(combineRequests.getNotes, action.payload);
    if (response) {
      yield put({ type: POSTS_SUCCESS, json: response.data });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

// function* postPosts(action) {
//   const item = { title: action.title, text: action.text };
//   try {
//     const response = yield call(combineRequests.postNotes, item);
//     if (response) {
//       yield put({ type: POST_NOTES_SUCCESS });
//       yield put({ type: GET_POSTS });
//     }
//   } catch (err) {
//     yield put({ type: ERROR_GET_POSTS, err });
//   }
// }

function* deletePosts(action) {
  try {
    const response = yield call(combineRequests.deleteNotes, action);
    if (response) {
      yield put({ type: GET_POSTS });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

function* putPosts(action) {
  try {
    const response = yield call(combineRequests.putNotes, action);
    if (response) {
      yield put({ type: GET_POSTS });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

function* actionWatcher() {
  yield takeLatest(GET_POSTS, getPosts);
  //yield takeLatest(CREATE_POST, postPosts);
  yield takeLatest(DELETE_NOTES_SUCCESS, deletePosts);
  yield takeLatest(SAVE_POST, putPosts);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
