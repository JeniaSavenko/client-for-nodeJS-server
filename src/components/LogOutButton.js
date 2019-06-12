import React from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Block from './Block';
import { logoutUser } from '../actions/UserActions';

const LogOutButton = ({ logout }) => (
  <Block width row ac js>
    <Block mh={10}>
      <Button
        title="LogOut"
        onPress={() => logout(NavigationActions.navigate)}
      />
    </Block>
  </Block>
);

const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(logoutUser(navigation)),
});

export default connect(
  store => (store),
  mapDispatchToProps,
)(LogOutButton);
