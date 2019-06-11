import io from 'socket.io-client';
import { AsyncStorage } from 'react-native';
import {
  createPostTitle, getPosts, rmPost, savePost,
} from '../actions/PostActions';
import { getToken, loginUser, regNewUser } from '../actions/UserActions';

const url = 'http://localhost:3000';
let socket;
let store;

export const configureSocket = (s) => {
  store = s;
};

export const getUserToken = () => AsyncStorage.getItem('userToken')
  .then((token) => {
    store.dispatch(getToken(token));
  });

export const runSocket = () => {
  socket = io(url, {
    query: {
      token: getUserToken(),
    },
  });
  socket.connect();

  socket.on('get_post', (post) => {
    store.dispatch(getPosts(post));
  });
};

export const saveUserToken = async (response) => {
  await AsyncStorage.setItem('userToken', response);
};

export const registration = (name, password) => {
  store.dispatch(regNewUser(name));
  socket.emit('registaration', { name, password });
  socket.on('get_token', (msg) => {
    saveUserToken(msg);
  });
};

export const login = (name, password, token) => {
  store.dispatch(loginUser(name));
  socket.emit('login', { name, password, token });
};

export const sendPost = (post) => {
  store.dispatch(createPostTitle(post));
  socket.emit('send_post', post);
};

export const deletePost = (id) => {
  store.dispatch(rmPost(id));
  socket.emit('delete_post', id);
};

export const updatePost = (id, title, text) => {
  store.dispatch(savePost(id, title, text));
  socket.emit('update_post', { id, title, text });
};
