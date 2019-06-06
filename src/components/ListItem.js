import React from 'react';
import { TouchableOpacity } from 'react-native';
import Block from './Block';
import { Body, Title } from '../style';


const ListItem = ({ title, text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Block row ac>
      <Block pv={5} mr={50}>
        <Title>
          {title}
        </Title>
        <Body>
          {text}
        </Body>
      </Block>
    </Block>
  </TouchableOpacity>
);

export default ListItem;
