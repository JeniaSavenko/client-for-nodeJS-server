export const CREATE_USER = 'CREATE_USER';
export const GET_TOKEN = 'GET_TOKEN';
export const LOGIN_USER = 'LOGIN_USER';

export const regNewUser = name => ({
  type: CREATE_USER,
  name,
});

export const loginUser = name => ({
  type: LOGIN_USER,
  name,
});

export const getToken = token => ({
  type: GET_TOKEN,
  token,
});
