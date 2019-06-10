export const CREATE_USER = 'CREATE_USER';
export const GET_TOKEN = 'GET_TOKEN';

export const regNewUser = name => ({
  type: CREATE_USER,
  name,
});

export const getToken = token => ({
  type: GET_TOKEN,
  token,
});
