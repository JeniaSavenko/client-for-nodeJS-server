import io from 'socket.io-client';
import { AsyncStorage } from 'react-native';
import {
  createPostTitle, finishEdit, getPosts, rmPost, savePost, startEdit,
} from '../actions/PostActions';
import { Auth } from '../constants/Auth';
import { SocketConst } from '../constants/Socket';

class Socket {
  static socket;

  static store;

  url;

  constructor(url) {
    this.url = url || Auth.mainUrl;
  }

  init = () => {
    if (Socket.instance) {
      return Socket.instance;
    }
    Socket.instance = this;

    return this;
  };

  configureSocket = (s) => {
    this.store = s;
  };

  runSocket = () => {
    this.socket = io(this.url, {
      query: {
        token: AsyncStorage.getItem(Auth.userToken),
      },
    });
    this.socket.connect();

    this.socket.on(SocketConst.getPost, (post) => {
      this.store.dispatch(getPosts(post));
    });

    this.socket.on(SocketConst.editMode, (msg) => {
      this.store.dispatch(startEdit(msg));
    });
  };

  sendPost = (post) => {
    this.store.dispatch(createPostTitle(post));
    this.socket.emit(SocketConst.sendPost, post);
  };

  deletePost = (id) => {
    this.store.dispatch(rmPost(id));
    this.socket.emit(SocketConst.deletePost, id);
  };

  updatePost = (id, title, text) => {
    this.store.dispatch(savePost(id, title, text));
    this.socket.emit(SocketConst.updatePost, { id, title, text });
  };

  editModeStart = (userId, postId) => {
    this.store.dispatch(startEdit(userId, postId));
    this.socket.emit(SocketConst.editModeStart, { userId, postId });
  };

  editModeFinish = (postId) => {
    this.store.dispatch(finishEdit(postId));
    this.socket.emit(SocketConst.editModeFinish, postId);
  };
}

const WebSocket = new Socket(Auth.mainUrl);

export default WebSocket;
