export const GET_POSTS = 'GET_POSTS';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_MODE_POST = 'EDIT_MODE_POST';
export const SAVE_POST = 'SAVE_POST';
export const POST_NOTES_SUCCESS = 'POST_NOTES_SUCCESS';
export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';

export const getPosts = post => ({
  type: GET_POSTS,
  post,
});

export const rmPost = item => ({
  type: DELETE_NOTES_SUCCESS,
  item,
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
