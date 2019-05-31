export const GET_POSTS = 'GET_POSTS';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_MODE_POST = 'EDIT_MODE_POST';
export const EDIT_SAVE_POST = 'EDIT_SAVE_POST';
export const SAVE_POST = 'SAVE_POST';
export const POST_NOTES_SUCCESS = 'POST_NOTES_SUCCESS';
export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';
export const ERROR_GET_POSTS = 'ERROR_GET_POSTS';
export const SERVER_OFF = 'SERVER_OFF';
export const SERVER_ON = 'SERVER_ON';
export const CHANNEL_ON = 'CHANNEL_ON';
export const CHANNEL_OFF = 'CHANNEL_OFF';
export const ADD_TASK = 'ADD_TASK';
export const START_CHANNEL = 'START_CHANNEL';
export const STOP_CHANNEL = 'STOP_CHANNEL';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const postPosts = (text, title) => ({
  type: POST_NOTES_SUCCESS,
  title,
  text,
});

export const rmPost = item => ({
  type: DELETE_NOTES_SUCCESS,
  item,
});

export const handleEditMode = itemId => ({
  type: EDIT_MODE_POST,
  itemId,
});

export const savePost = (itemId, title, text) => ({
  type: SAVE_POST,
  itemId,
  title,
  text,
});

export const createPostTitle = (title, text) => ({
  type: CREATE_POST,
  title,
  text,
});
