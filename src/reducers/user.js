import {
  CREATE_USER, GET_TOKEN, LOGIN_USER, LOGOUT_USER, LOGOUT_USER_SUCCESS,
} from '../actions/UserActions';

export function userReducer(state = {}, action) {
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
        logged: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: undefined,
        logged: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
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
