import React from 'react';
import { TouchableOpacity } from 'react-native';
import Block from './Block';
import { Body, Title } from '../style';


const ListItem = ({
  title, text, save, onPress,
}) => {
  const newDate = new Date(save).toISOString().slice(0, 10);
  return (
    <TouchableOpacity onPress={onPress}>
      <Block row ac>
        <Block flex={1} pv={5} mr={50}>
          <Title>
            {title}
          </Title>
          <Body>
            {text}
          </Body>
        </Block>
        <Block flex={1} row ae je>
          <Body>Last Save </Body>
          <Body>
            {newDate}
          </Body>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ListItem;
