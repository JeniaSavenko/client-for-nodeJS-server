export const GET_POSTS = 'GET_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const SAVE_POST = 'SAVE_POST';
export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';
export const START_EDIT = 'START_EDIT';
export const FINISH_EDIT = 'FINISH_EDIT';

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

export const createPostTitle = ({ title, text }) => ({
  type: CREATE_POST,
  title,
  text,
});

export const startEdit = () => ({
  type: START_EDIT,
});

export const finishEdit = postId => ({
  type: FINISH_EDIT,
  postId,
});
