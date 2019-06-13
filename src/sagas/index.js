import {
  put, takeLatest, all, call,
} from 'redux-saga/effects';
import * as axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
  CREATE_USER, ERROR, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER,
} from '../actions/UserActions';

const url = 'http://localhost:3000/auth';

const combineRequests = {
  login: payload => axios.post(`${url}/login`, payload)
    .then(response => response)
    .catch(err => err),

  reg: payload => axios.post(`${url}/reg`, payload)
    .then(response => response)
    .catch(err => err),
};

function* Login(action) {
  const user = { name: action.name, password: action.password };
  const response = yield call(combineRequests.login, user);
  if (response.data) {
    yield put({ type: LOGIN_SUCCESS, response });
    AsyncStorage.setItem('userToken', response.data.accessToken);
    action.navigation.navigate('PostScreen');
  } else {
    yield put({ type: ERROR, response });
  }
}

function* CreateNewUser(action) {
  const user = { name: action.name, password: action.password };
  const response = yield call(combineRequests.reg, user);
  if (response) {
    yield put({ type: LOGIN_SUCCESS, response });
    AsyncStorage.setItem('userToken', response.data.accessToken);
    action.navigation.navigate('PostScreen');
  } else {
    yield put({ type: ERROR, response });
  }
}

function* Logout() {
  AsyncStorage.removeItem('userToken');
  yield put({ type: LOGOUT_USER });
}

function* actionWatcher() {
  yield takeLatest(LOGIN_USER, Login);
  yield takeLatest(CREATE_USER, CreateNewUser);
  yield takeLatest(LOGOUT_USER, Logout);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
