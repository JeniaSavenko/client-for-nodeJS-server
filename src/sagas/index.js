import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import {
  CREATE_POST,
  GET_POSTS,
  POSTS_SUCCESS,
  POST_NOTES_SUCCESS,
  DELETE_NOTES_SUCCESS,
  SAVE_POST,
  ERROR_GET_POSTS,
  SERVER_OFF,
  SERVER_ON,
  CHANNEL_ON,
  ADD_TASK,
  CHANNEL_OFF,
  START_CHANNEL, STOP_CHANNEL,
} from '../actions/PostActions';

const socketServerURL = 'http://localhost:3000';


function connect() {
  const socket = io(socketServerURL);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });

    socket.on('CREATE_POST', ()=>{
      emit()
    })
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('CREATE_POST', ({ username }) => {
      emit(createPostTitle({ title: 'test', text: 'test1' }));
    });
    socket.on('disconnect', e => {
      // TODO: handle
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take(`${sendMessage}`);
    socket.emit('CREATE_POST', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  while (true) {
    const socket = yield call(connect);
    socket.emit('CREATE_POST', { title: 'test', text: 'test11111' });

    const task = yield fork(handleIO, socket);

    yield cancel(task);
    socket.emit('logout');
  }
}

export default function* rootSaga() {
  yield fork(flow);
}

/* const combineRequests = {
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

function* postPosts(action) {
  const item = { title: action.title, text: action.text };
  try {
    const response = yield call(combineRequests.postNotes, item);
    if (response) {
      yield put({ type: POST_NOTES_SUCCESS });
      yield put({ type: GET_POSTS });
    }
  } catch (err) {
    yield put({ type: ERROR_GET_POSTS, err });
  }
}

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
  yield takeLatest(CREATE_POST, postPosts);
  yield takeLatest(DELETE_NOTES_SUCCESS, deletePosts);
  yield takeLatest(SAVE_POST, putPosts);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
} */
