import { combineReducers } from 'redux';
import { postReducer } from "./post";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});