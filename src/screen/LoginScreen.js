import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';

const LoginScreen = ({
  navigation,
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
      <Button title={t('login')} onPress={() => goTo('PostScreen')} />
    </Block>
  );
};

export default LoginScreen;
