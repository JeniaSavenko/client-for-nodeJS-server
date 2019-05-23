export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export function setLogIn(){
  return{
    type: LOG_IN,
    name: 'User',
    logged: true,
  }
}
export function setLogOut(){
  return{
    type: LOG_OUT,
    name: 'Anon',
    logged: false,
  }
}