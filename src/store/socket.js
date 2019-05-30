import io from 'socket.io-client';
import { POSTS_SUCCESS } from '../actions/PostActions';

const token = '';

const url = io('http://localhost:5000/notes');


let socket;
let store;

export const configureSocket = str => {
    store = str
}

export const runSocket = () => {
    socket = io(url, {
        query:'hello world'
    });
    socket.connect();


    socket.on("send_posts", posts => {
        store.dispatch(sendPosts(post))
    });

    socket.on('get_posts', posts => {
        store.dispatch(getPosts(posts));
    });
}
