import React from 'react';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';
import { Navigation } from '../constants/Navigation';

const HomeScreen = ({
  navigation,
}) => {
  function goTo(screen) {
    navigation.navigate(screen);
  }

  const { t } = useTranslation();

  return (
    <Block height ac jc>
      <Block width="60%" mv={10}>
        <Button title={t('login')} onPress={() => goTo(Navigation.LoginScreen)} />
      </Block>
      <Block width="60%">
        <Button title={t('registration')} onPress={() => goTo(Navigation.CreateUserScreen)} />
      </Block>
    </Block>
  );
};

export default HomeScreen;
