import io from 'socket.io-client';
import {
  createPostTitle, getPosts, rmPost, savePost,
} from '../actions/PostActions';

const url = 'http://localhost:3000';

let socket;
let store;

export const configureSocket = (s) => {
  store = s;
};

export const runSocket = () => {
  socket = io(url);
  socket.connect();

  socket.on('get_post', (post) => {
    store.dispatch(getPosts(post));
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
