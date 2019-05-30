import io from 'socket.io-client';
import { POSTS_SUCCESS } from '../actions/PostActions';

const token = '';

const socket = io('http://localhost:5000/notes');
socket.connect();

export const configureSocket = function (store) {
    socket.emit('authenticate', token);

    socket.on('postCreated', (response) => {
        const { title, text } = response;
        store.dispatch(POSTS_SUCCESS(title, text));
    });
};
