import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Block from '../components/Block';
import { loginUser } from '../actions/UserActions';

const LoginScreen = ({
  navigation,
  login,
}) => {
  const { t: translate } = useTranslation();

  const [userName, setUserName] = useState();

  const [userPass, setUserPass] = useState();

  function handleUserNameChange(name) {
    setUserName(name);
  }

  function handleUserPassChange(pass) {
    setUserPass(pass);
  }

  function onLogin() {
    login(userName, userPass, navigation);
  }

  return (
    <Block height width>
      <Input
        placeholder={translate('userName')}
        value={userName}
        onChangeText={handleUserNameChange}
      />
      <Input
        placeholder={translate('userPass')}
        value={userPass}
        onChangeText={handleUserPassChange}
      />
      <Button
        title={translate('login')}
        onPress={onLogin}
      />
    </Block>
  );
};

const mapStateToProps = store => ({
  token: store.user.token,
});

const mapDispatchToProps = dispatch => ({
  login: (name, password, navigation) => dispatch(loginUser(name, password, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
