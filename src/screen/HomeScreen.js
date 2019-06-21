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

  const { t: translate } = useTranslation();

  return (
    <Block height ac jc>
      <Block width="60%" mv={10}>
        <Button title={translate('login')} onPress={() => goTo(Navigation.LoginScreen)} />
      </Block>
      <Block width="60%">
        <Button title={translate('registration')} onPress={() => goTo(Navigation.CreateUserScreen)} />
      </Block>
    </Block>
  );
};

export default HomeScreen;
