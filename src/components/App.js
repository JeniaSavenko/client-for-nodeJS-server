import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.scss';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from "./Header";
import Login from "./Login";
import InnerApp from "./InnerApp";
import {Default} from "./Default";
import { setLogIn, setLogOut }  from '../actions/UserActions'

class ProtectedRoute extends React.Component {
  render(){
    const {setLogInAction, setLogOutAction, user, exact, path, component} = this.props;
    return(
       <Route exact={exact} path={path} component={component} />
    )
  }
}

class App extends Component {
  render() {
    const mainClass = 'App';
    const {setLogInAction, setLogOutAction, user, post} = this.props;
    return (
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
      <div className={mainClass}>
        <Router>
          <div style={{display: 'flex', flexDirection:'column', minHeight:'100vh'}}>
            <Header history={this.props.history}/>
            <Switch>
              <Route exact path="/" component={Default} />
              <ProtectedRoute path={'/app'} user={user} component={InnerApp} setLogInAction={setLogInAction} setLogOutAction={setLogOutAction} />
              <Route path="/login" render={()=> <Login isLoggedIn={user.isLoggedIn} name={user.name} setLogIn={setLogInAction} setLogOut={setLogOutAction} />} />
            </Switch>
          </div>
        </Router>
      </div>
      </Scrollbars>
    );
  }
}

const mapStateToProps = store => {
  return{
    user: store.user,
  }
};

const mapDispatchToProps = dispatch =>({
  setLogInAction: ({name, isLoggedIn}) => dispatch(setLogIn(name, isLoggedIn)),
  setLogOutAction: ({name, isLoggedIn}) => dispatch(setLogOut(name, isLoggedIn)),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
