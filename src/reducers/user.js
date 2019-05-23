import { LOG_IN, LOG_OUT} from '../actions/UserActions'
const initialState = {
  isLoggedIn: false,
  name: 'Anon'
};

export function userReducer( state = initialState, action){
  switch (action.type){
    case LOG_IN:
      return {...state, isLoggedIn: action.logged, name: action.name};
    case LOG_OUT:
      return {...state, isLoggedIn: action.logged, name: action.name};
    default:
      return state;
  }
}
