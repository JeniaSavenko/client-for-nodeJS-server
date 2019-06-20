import io from 'socket.io-client';
import { AsyncStorage } from 'react-native';
import {
  createPostTitle, finishEdit, getPosts, rmPost, savePost, startEdit,
} from '../actions/PostActions';
import { Auth } from '../constants/Auth';
import { SocketConst } from '../constants/Socket';

let socket;
let store;

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
  }


  configureSocket = (s) => {
    store = s;
  };

  runSocket = () => {
    socket = io(this.url, {
      query: {
        token: AsyncStorage.getItem(Auth.userToken),
      },
    });
    socket.connect();

    socket.on(SocketConst.getPost, (post) => {
      store.dispatch(getPosts(post));
    });

    socket.on(SocketConst.editMode, (msg) => {
      store.dispatch(startEdit(msg));
    });
  };

  sendPost = (post) => {
    store.dispatch(createPostTitle(post));
    socket.emit(SocketConst.sendPost, post);
  };

  deletePost = (id) => {
    store.dispatch(rmPost(id));
    socket.emit(SocketConst.deletePost, id);
  };

  updatePost = (id, title, text) => {
    store.dispatch(savePost(id, title, text));
    socket.emit(SocketConst.updatePost, { id, title, text });
  };

  editModeStart = (userId, postId) => {
    store.dispatch(startEdit(userId, postId));
    socket.emit(SocketConst.editModeStart, { userId, postId });
  };

  editModeFinish = (postId) => {
    store.dispatch(finishEdit(postId));
    socket.emit(SocketConst.editModeFinish, postId);
  };
}

const WebSocket = new Socket(Auth.mainUrl);

WebSocket.init();

export default WebSocket;
