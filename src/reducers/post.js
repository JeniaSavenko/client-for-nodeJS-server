import {
  GET_POSTS, CREATE_POST, SAVE_POST, START_EDIT, FINISH_EDIT,
} from '../actions/PostActions';

const savePosts = (posts, { itemId, title, text }) => posts.map(postItem => ({
  ...postItem,
  title: itemId === postItem._id ? title : postItem.title,
  text: itemId === postItem._id ? text : postItem.text,
}));

export function postReducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.post,
      };
    case SAVE_POST:
      return {
        ...state,
        posts: savePosts(state.posts, action),
        action,
      };
    case CREATE_POST:
      return {
        ...state,
      };
    case START_EDIT:
      return {
        ...state,
      };
    case FINISH_EDIT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
