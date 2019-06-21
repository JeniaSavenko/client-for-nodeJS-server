import React from 'react';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from './Block';

const HeaderButton = () => {
  const { t: translate, i18n } = useTranslation();
  return (
    <Block width row ac je>
      <Block mh={10}>
        <Button title={translate('ru')} onPress={() => i18n.changeLanguage('ru')} />
      </Block>
      <Block mh={10}>
        <Button title={translate('en')} onPress={() => i18n.changeLanguage('en')} />
      </Block>
    </Block>
  );
};

export default HeaderButton;
