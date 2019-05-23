import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.scss';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from "./Header";
import InnerApp from "./InnerApp";
import {Default} from "./Default";

class App extends Component {
  render() {
    const mainClass = 'App';
    return (
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
      <div className={mainClass}>
        <Router>
          <div style={{display: 'flex', flexDirection:'column', minHeight:'100vh'}}>
            <Header history={this.props.history}/>
            <Switch>
              <Route exact path="/" component={Default} />
              <Route path={'/app'} component={InnerApp} />
            </Switch>
          </div>
        </Router>
      </div>
      </Scrollbars>
    );
  }
}

export default App;
