import React from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Block from './Block';
import { logoutUser } from '../actions/UserActions';

const LogOutButton = ({ logout, navigation }) => {
  const { t: translate } = useTranslation();
  return (
    <Block width row ac js>
      <Block mh={10}>
        <Button
          title={translate('logout')}
          onPress={() => logout(navigation)}
        />
      </Block>
    </Block>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(logoutUser(navigation)),
});

export default connect(
  store => (store),
  mapDispatchToProps,
)(LogOutButton);
