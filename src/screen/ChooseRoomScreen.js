import React, { useState, useEffect } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import WebSocket from '../api/socket';
import Block from '../components/Block';
import { Navigation } from '../constants/Navigation';

const ChooseRoomScreen = ({
  navigation,
  userName,
}) => {
  useEffect(() => {
    WebSocket.runSocket();
  }, []);

  const [name, setRoomName] = useState();

  const { t: translate } = useTranslation();

  function handleRoomChange(roomName) {
    setRoomName(roomName);
  }

  const Choose = () => {
    WebSocket.chooseRoom(name, userName);
    navigation.navigate(Navigation.PostScreen);
  };

  return (
    <Block height width>
      <Input
        placeholder={translate('roomName')}
        value={name}
        onChangeText={handleRoomChange}
      />
      <Button
        title={translate('chooseRoom')}
        onPress={() => Choose()}
      />
    </Block>
  );
};

const mapStateToProps = store => ({
  userName: store.user.name,
});

export default connect(mapStateToProps)(ChooseRoomScreen);
