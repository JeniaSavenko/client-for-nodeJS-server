import io from 'socket.io-client';
import {
  createPostTitle, getPosts, rmPost, savePost,
} from '../actions/PostActions';
import { getToken, regNewUser } from '../actions/UserActions';

const url = 'http://localhost:3000';
let socket;
let store;

export const configureSocket = (s) => {
  store = s;
};

export const runSocket = () => {
  socket = io(url, {
    pingInterval: 30000,
    pingTimeout: 60000,
  });
  socket.connect();

  socket.on('get_post', (post) => {
    store.dispatch(getPosts(post));
  });
};

export const registration = (name, password) => {
  store.dispatch(regNewUser(name));
  socket.emit('registaration', { name, password });
  socket.on('get_token', (msg) => {
    store.dispatch(getToken(msg));
  });
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
