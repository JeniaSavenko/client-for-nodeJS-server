import React from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { useTranslation } from 'react-i18next';
import Block from './Block';
import { logoutUser } from '../actions/UserActions';

const LogOutButton = ({ logout }) => {
  const { t } = useTranslation();
  return (
    <Block width row ac js>
      <Block mh={10}>
        <Button
          title={t('logout')}
          onPress={() => logout(NavigationActions.navigate)}
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
