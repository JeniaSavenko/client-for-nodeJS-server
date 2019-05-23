import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
  logIn = () =>{
    const isLoggedIn = true;
    this.props.setLogIn(isLoggedIn)
  };
  logOut = () =>{
    const isLoggedIn = false;
    this.props.setLogOut(isLoggedIn)
  };
  render(){
    const {isLoggedIn, name} = this.props;
    return(
      <div style={{margin:'5.8rem'}}>
        <p style={{marginTop: 0, fontSize: '3rem'}}>Hello, {name}, you're now {isLoggedIn ? 'logged in' : 'logged out'}</p>
        <Button style={{marginRight:'1.5rem'}} disabled={isLoggedIn} onClick={this.logIn} variant="contained" color="primary">Login</Button>
        <Button disabled={!isLoggedIn} onClick={this.logOut} variant="contained" color="primary">Logout</Button>
      </div>
    )
  }
}

Login.propTypes = {
  setLogIn: PropTypes.func,
  setLogOut: PropTypes.func,
};

export default Login;