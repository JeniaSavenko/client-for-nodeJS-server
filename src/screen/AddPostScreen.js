import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';
import WebSocket from '../api/socket';
import { Navigation } from '../constants/Navigation';

const AddPostScreen = ({ navigation }) => {
  const [title, setTitle] = useState();

  const [text, setText] = useState();

  const goTo = navigation.navigate;

  const { t: translate } = useTranslation();

  function send() {
    WebSocket.sendPost({ title, text });
    goTo(Navigation.PostScreen);
  }

  return (
    <Block>
      <Input
        placeholder={translate('title')}
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Input
        placeholder={translate('text')}
        value={text}
        onChangeText={value => setText(value)}
      />
      <Block ph={5}>
        <Button
          title={translate('add')}
          onPress={send}
        />
      </Block>
    </Block>
  );
};

export default AddPostScreen;
