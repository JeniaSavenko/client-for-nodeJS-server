import { eventChannel } from 'redux-saga';
import {
  take, call, put, fork,
} from 'redux-saga/effects';
import { socket } from '../api/socket';
import { CREATE_POST, GET_POSTS, POSTS_SUCCESS } from '../actions/PostActions';

export const SocketEvents = {
  jobsFresh: 'jobs+fresh',
};


function* addMessages(message) {
  console.log('message', message);
  yield put({ type: POSTS_SUCCESS, json: message });
}

function* createPostAction() {
  while (true) {
    const action = yield take(CREATE_POST);
    const { title, text } = action;
    socket.emit('message', { title, text });
  }
}
function* getPostAction() {
  while (true) {
    yield take(GET_POSTS);
    console.log('true', addMessages);
    socket.on('message', addMessages);
  }
}

export function createFreshJobsChannel() {
  const subscribe = (emitter) => {
    socket.on(SocketEvents.jobsFresh, emitter);

    return () => socket.removeListener(SocketEvents.jobsFresh, emitter);
  };

  return eventChannel(subscribe);
}

export function* freshJobsSaga() {
  const channel = yield call(createFreshJobsChannel);

  while (true) {
    const jobs = yield take(channel);

    const action = JobsActions.fresh(jobs);

    yield put(action);
  }
}

export default function* rootSaga() {
  yield fork(freshJobsSaga);
  yield fork(createPostAction);
  yield fork(getPostAction);
}


// import io from 'socket.io-client';
// import { eventChannel } from 'redux-saga';
// import {
//   fork, take, call, put, cancel, takeLatest,
// } from 'redux-saga/effects';
// import {
//   CREATE_POST,
//   GET_POSTS,
//   POSTS_SUCCESS,
//   POST_NOTES_SUCCESS,
//   DELETE_NOTES_SUCCESS,
//   SAVE_POST,
//   ERROR_GET_POSTS,
//   SERVER_OFF,
//   SERVER_ON,
//   CHANNEL_ON,
//   ADD_TASK,
//   CHANNEL_OFF,
//   START_CHANNEL, STOP_CHANNEL,
// } from '../actions/PostActions';
//
// const socketServerURL = 'http://localhost:3000';
//
//
// function connect() {
//   const socket = io(socketServerURL);
//   return new Promise((resolve) => {
//     socket.on('connect', () => {
//       resolve(socket);
//     });
//   });
// }
//
// const createSocketChannel = socket => eventChannel((emit) => {
//   const handler = (data) => {
//     emit(data);
//   };
//   socket.on('newTask', handler);
//   return () => {
//     socket.off('newTask', handler);
//   };
// });
//
// function* postPosts(action) {
//   const item = { title: action.title, text: action.text };
//   try {
//     const response = yield call(CREATE_POST, this.socket.emit('message', item));
//     if (response) {
//       yield put({ type: POST_NOTES_SUCCESS });
//     }
//   } catch (err) {
//     yield put({ type: ERROR_GET_POSTS, err });
//   }
// }
//
//
// function* flow(action) {
//   const socket = yield call(connect);
//   yield takeLatest(CREATE_POST, postPosts);
// }
//
// export default function* rootSaga() {
//   yield fork(flow);
// }

//  const combineRequests = {
//   getNotes: () => axios.get(url)
//     .then(response => response)
//     .catch(err => err),
//
//   postNotes: payload => axios.post(url, payload)
//     .then(response => response)
//     .catch(err => err),
//
//   deleteNotes: payload => axios.delete(`${url}/${payload.item}`),
//
//   putNotes: payload => axios.put(`${url}/${payload.itemId}`, payload)
//     .then(response => response)
//     .catch(err => err)
//
// };
//
// function* getPosts(action) {
//   try {
//     const response = yield call(combineRequests.getNotes, action.payload);
//     if (response) {
//       yield put({ type: POSTS_SUCCESS, json: response.data });
//     }
//   } catch (err) {
//     yield put({ type: ERROR_GET_POSTS, err });
//   }
// }
//
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
//
// function* deletePosts(action) {
//   try {
//     const response = yield call(combineRequests.deleteNotes, action);
//     if (response) {
//       yield put({ type: GET_POSTS });
//     }
//   } catch (err) {
//     yield put({ type: ERROR_GET_POSTS, err });
//   }
// }
//
// function* putPosts(action) {
//   try {
//     const response = yield call(combineRequests.putNotes, action);
//     if (response) {
//       yield put({ type: GET_POSTS });
//     }
//   } catch (err) {
//     yield put({ type: ERROR_GET_POSTS, err });
//   }
// }
//
// function* actionWatcher() {
//   yield takeLatest(GET_POSTS, getPosts);
//   yield takeLatest(CREATE_POST, postPosts);
//   yield takeLatest(DELETE_NOTES_SUCCESS, deletePosts);
//   yield takeLatest(SAVE_POST, putPosts);
// }
//
// export default function* rootSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }
