import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';
import { sendPost } from '../api/socket';

const AddPostScreen = ({ navigation }) => {
  const goTo = navigation.navigate;

  const [title, setTitle] = useState();

  const [text, setText] = useState();

  const { t } = useTranslation();

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
      <Block ph="5">
        <Button
          title={t('add')}
          onPress={() => {
            sendPost({ title, text });
            goTo('PostScreen');
          }}
        />
      </Block>
    </Block>
  );
};

export default AddPostScreen;
