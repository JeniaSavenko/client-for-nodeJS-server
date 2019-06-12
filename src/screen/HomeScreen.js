import React from 'react';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';

const HomeScreen = ({
  navigation,
}) => {
  const goTo = navigation.navigate;

  const { t } = useTranslation();

  return (
    <Block height ac jc>
      <Block width="60%" mv="10">
        <Button title={t('login')} onPress={() => goTo('LoginScreen')} />
      </Block>
      <Block width="60%">
        <Button title={t('registration')} onPress={() => goTo('CreateUserScreen')} />
      </Block>
    </Block>
  );
};

export default HomeScreen;
