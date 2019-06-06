import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import Block from '../components/Block';
import { sendPost } from '../api/socket';

const AddPostScreen = ({ navigation }) => {
  const goTo = navigation.navigate;

  const [title, setTitle] = useState();

  const [text, setText] = useState();

  return (
    <Block>
      <Input
        placeholder="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Input
        placeholder="Text"
        value={text}
        onChangeText={value => setText(value)}
      />
      <Block ph="5">
        <Button
          title="Add"
          onPress={() => {
            sendPost({ title, text });
            goTo('Home');
          }}
        />
      </Block>
    </Block>
  );
};

export default AddPostScreen;
