import React from 'react';
import { Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import Block from './Block';


const LogOutButton = () => {
  const onLogOut = () => AsyncStorage.removeItem('userToken');
  return (
    <Block width row ac je>
      <Block mh={10}>
        <Button
          title="LogOut"
          onPress={() => {
            onLogOut();
          }}
        />
      </Block>
    </Block>
  );
};

export default LogOutButton;
