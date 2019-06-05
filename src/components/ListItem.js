import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Block from './Block';

const Title = styled.Text`
    fontSize: 16px;
`;

const Body = styled.Text`
    fontSize: 14px;
    color: #999999
`;

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
