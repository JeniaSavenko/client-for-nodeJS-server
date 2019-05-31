import {
  GET_POSTS,
  POSTS_SUCCESS,
  DELETE_POST,
  CREATE_POST,
  EDIT_MODE_POST,
  HANDLE_TEXT_CHANGE,
  SAVE_POST,
  POST_NOTES_SUCCESS,
  ERROR_GET_POSTS, CHANNEL_ON, CHANNEL_OFF, ADD_TASK, SERVER_OFF, SERVER_ON,
} from '../actions/PostActions';

const initialState = {
  posts: [{ _id: '1', title: 'test', text: 'text text' }],
};

const editModePosts = (posts, id) => posts.map(postItem => ({
  ...postItem,
  editMode: postItem._id === id,
  editableField: postItem.text,
}));

const savePosts = (posts, id) => posts.map(postItem => ({
  ...postItem,
  text: postItem.editableField,
  editMode: false,
}));

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.json,
      };
    case EDIT_MODE_POST:
      return {
        ...state,
        posts: editModePosts(state.posts, action.itemId),
      };
    case SAVE_POST:
      return {
        ...state,
        posts: savePosts(state.posts, action.itemId),
        action,
      };
    case CREATE_POST:
      return {
        ...state,
      };
    case POST_NOTES_SUCCESS:
      return {
        ...state,
        action,
      };
    default:
      return state;
  }
}
