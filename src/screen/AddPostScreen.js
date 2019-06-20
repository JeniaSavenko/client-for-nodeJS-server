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

  const { t } = useTranslation();

  function send() {
    WebSocket.sendPost({ title, text });
    goTo(Navigation.PostScreen);
  }

  return (
    <Block>
      <Input
        placeholder={t('title')}
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Input
        placeholder={t('text')}
        value={text}
        onChangeText={value => setText(value)}
      />
      <Block ph={5}>
        <Button
          title={t('add')}
          onPress={send}
        />
      </Block>
    </Block>
  );
};

export default AddPostScreen;
