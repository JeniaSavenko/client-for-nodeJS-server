export const CREATE_USER = 'CREATE_USER';
export const GET_TOKEN = 'GET_TOKEN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ERROR = 'ERROR';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';


export const loginUser = (name, password, navigation) => ({
  type: LOGIN_USER,
  name,
  password,
  navigation,
});

export const regNewUser = (name, password, navigation) => ({
  type: CREATE_USER,
  name,
  password,
  navigation,
});

export const logoutUserSuccess = navigation => ({
  type: LOGOUT_USER_SUCCESS,
  navigation,
});

export const logoutUser = navigation => ({
  type: LOGOUT_USER,
  navigation,
});


export const getToken = token => ({
  type: GET_TOKEN,
  token,
});

export const error = err => ({
  type: ERROR,
  err,
});
