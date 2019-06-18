import io from 'socket.io-client';
import { AsyncStorage } from 'react-native';
import {
  createPostTitle, getPosts, rmPost, savePost,
} from '../actions/PostActions';
import { Auth } from '../constants/Auth';

let socket;
let store;

class Socket {
  static socket;

  static store;

  configureSocket = (s) => {
    store = s;
  };

  runSocket = () => {
    socket = io(Auth.mainUrl, {
      query: {
        token: AsyncStorage.getItem('userToken'),
      },
    });
    socket.connect();

    socket.on('get_post', (post) => {
      store.dispatch(getPosts(post));
    });
  };

  sendPost = (post) => {
    store.dispatch(createPostTitle(post));
    socket.emit('send_post', post);
  };

  deletePost = (id) => {
    store.dispatch(rmPost(id));
    socket.emit('delete_post', id);
  };

  updatePost = (id, title, text) => {
    store.dispatch(savePost(id, title, text));
    socket.emit('update_post', { id, title, text });
  };
}


export const WebSocket = new Socket();
