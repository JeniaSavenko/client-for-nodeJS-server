import { CREATE_USER, GET_TOKEN, LOGIN_USER } from '../actions/UserActions';

const initialState = {
  posts: [{ _id: '', title: '', text: '' }],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        name: action.name,
      };
    case LOGIN_USER:
      return {
        ...state,
        name: action.name,
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
