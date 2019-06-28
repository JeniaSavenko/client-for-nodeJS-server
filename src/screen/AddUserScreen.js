import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import WebSocket from '../api/socket';
import Block from '../components/Block';
import { Navigation } from '../constants/Navigation';

const AddUserScreen = ({
  navigation,
  roomName,
}) => {
  const [name, setUserName] = useState();

  const { t: translate } = useTranslation();

  function handleRoomChange(name) {
    setUserName(name);
  }

  const AddUser = () => {
    WebSocket.addUserInRoom(roomName, name);
    navigation.navigate(Navigation.PostScreen);
  };
  return (
    <Block height width>
      <Input
        placeholder={translate('userName')}
        value={name}
        onChangeText={handleRoomChange}
      />
      <Button
        title={translate('Add')}
        onPress={() => AddUser()}
      />
    </Block>
  );
};

const mapStateToProps = store => ({
  roomName: store.user.roomName,
});

export default connect(mapStateToProps)(AddUserScreen);
