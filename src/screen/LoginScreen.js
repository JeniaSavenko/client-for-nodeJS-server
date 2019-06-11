import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Block from '../components/Block';
import { login } from '../api/socket';

const LoginScreen = ({
  navigation,
  token,
}) => {
  const goTo = navigation.navigate;

  const { t } = useTranslation();

  const [userName, setUserName] = useState();

  const [userPass, setUserPass] = useState();

  return (
    <Block height width>
      <Input
        placeholder={t('userName')}
        value={userName}
        onChangeText={value => setUserName(value)}
      />
      <Input
        placeholder={t('userPass')}
        value={userPass}
        onChangeText={value => setUserPass(value)}
      />
      <Button
        title={t('login')}
        onPress={() => {
          login(userName, userPass, token);
          goTo('PostScreen');
        }}
      />
    </Block>
  );
};

const mapStateToProps = store => ({
  token: store.user.token,
});

export default connect(mapStateToProps)(LoginScreen);
