import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class Header extends React.Component {
  render(){
    const mainClass = 'header';
    return(
      <AppBar position="fixed">
        <Toolbar  className={mainClass} variant="dense">
          <Link className="link txt-white" to="/app" >Dashboard</Link>
        </Toolbar>
      </AppBar>
    )
  }
}