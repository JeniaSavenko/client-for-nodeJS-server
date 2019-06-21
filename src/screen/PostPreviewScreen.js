import React, { useState, useEffect } from 'react';
import { Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';
import WebSocket from '../api/socket';
import { Style } from '../style';
import { Navigation } from '../constants/Navigation';
import ButtonWithIcon from '../components/ButtonWithIcon';

const PostPreviewScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  const [title, setTitle] = useState(post.title);

  const [text, setText] = useState(post.text);

  function handleUserTitleChange(title) {
    setTitle(title);
  }

  function handleUserTextChange(text) {
    setText(text);
  }

  const goTo = navigation.navigate;

  const { t: translate } = useTranslation();

  useEffect(
    () => {
      const timer = setTimeout(() => WebSocket.updatePost(post._id, title, text), 2000);
      return () => {
        clearTimeout(timer);
      };
    },
    [title, text],
  );

  function update() {
    WebSocket.updatePost(post._id, title, text);
    WebSocket.editModeFinish(post._id);
    goTo(Navigation.PostScreen);
  }
  function remove() {
    WebSocket.deletePost(post._id);
    goTo(Navigation.PostScreen);
  }

  return (
    <Block>
      <Input
        placeholder={translate('title')}
        value={title}
        onChangeText={handleUserTitleChange}
      />
      <Input
        placeholder={translate('text')}
        value={text}
        onChangeText={handleUserTextChange}
      />
      <Block row ac jb widht pv="10" ph="5">
        <Block width="48%">
          <ButtonWithIcon iconName={Style.iconSave} title={translate('save')} onPress={update} />
        </Block>
        <Block width="48%">
          <ButtonWithIcon iconName={Style.iconTrash} title={translate('delete')} onPress={remove} />
        </Block>
      </Block>
    </Block>
  );
};

PostPreviewScreen.navigationOptions = {
  title: 'Edit',
  headerLeft: null,
};

export default PostPreviewScreen;
