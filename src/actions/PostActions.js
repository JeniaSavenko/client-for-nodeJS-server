export const GET_POSTS = 'GET_POSTS';
export const POSTS_SUCCESS ='POSTS_SUCCESS';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_MODE_POST = 'EDIT_MODE_POST';
export const HANDLE_TEXT_CHANGE = 'HANDLE_TEXT_CHANGE';
export const EDIT_SAVE_POST = 'EDIT_SAVE_POST';
export const SAVE_POST = 'SAVE_POST';
export const POST_NOTES_SUCCESS = 'POST_NOTES_SUCCESS';
export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const postPosts = (text, title) => ({
  type: POST_NOTES_SUCCESS,
  title,
  text
});

export function rmPost(item){
  return{
    type: DELETE_NOTES_SUCCESS,
    item
  }
}
export function handleEditMode(itemId){
  return{
    type: EDIT_MODE_POST,
    itemId,
  }
}
export function savePost(itemId, text, title){
  return{
    type: SAVE_POST,
    itemId,
    text,
    title
  }
}

export function textEdit(itemId, itemValue){
  return{
    type: HANDLE_TEXT_CHANGE,
    itemId, itemValue
  }
}

export const createPostTitle = (text, title) =>({
  type: CREATE_POST,
  text,
  title
});
