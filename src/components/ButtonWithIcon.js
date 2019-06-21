import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { Style } from '../style';

const ButtonWithIcon = ({ iconName, title, onPress }) => (
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
    title={title}
    onPress={onPress}
  />
);

export default ButtonWithIcon;
