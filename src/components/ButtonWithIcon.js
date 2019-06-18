import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { Style } from '../style';

const ButtonWithIcon = ({ iconName, title, onPress }) => {
  const { t } = useTranslation();
  return (
    <Button
      outline
      icon={(
        <Icon
          name={iconName}
          type={Style.iconType}
          color={Style.colorWhite}
        />
      )}
      titleStyle={Style.titleStyle}
      title={t(title)}
      onPress={onPress}
    />
  );
};

export default ButtonWithIcon;
