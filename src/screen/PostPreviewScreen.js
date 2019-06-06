import React, { useState, useEffect } from 'react';
import { Button, Icon, Input } from 'react-native-elements';
import Block from '../components/Block';
import { deletePost, updatePost } from '../api/socket';
import { Style } from '../style';

const PostPreviewScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  const goTo = navigation.navigate;

  const [title, setTitle] = useState(post.title);

  const [text, setText] = useState(post.text);

  useEffect(
    () => {
      const timer = setTimeout(() => updatePost(post._id, title, text), 3000);
      return () => {
        clearTimeout(timer);
      };
    },
    [title, text],
  );

  return (
    <Block>
      <Input
        placeholder="Title"
        value={title}
        onChangeText={(value) => {
          setTitle(value);
        }}
      />
      <Input
        placeholder="Text"
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
      />
      <Block row ac jb widht pv="10" ph="5">
        <Block width="48%">
          <Button
            outline
            icon={(
              <Icon
                name={Style.iconType}
                type={Style.iconSave}
                color={Style.colorWhite}
              />
            )}
            titleStyle={Style.titleStyle}
            title="Save"
            onPress={() => {
              updatePost(post._id, title, text);
              goTo('Home');
            }}
          />
        </Block>
        <Block width="48%">
          <Button
            outline
            icon={(
              <Icon
                name={Style.iconTrash}
                type={Style.iconType}
                color={Style.colorWhite}
              />
            )}
            titleStyle={Style.titleStyle}
            title="delete"
            onPress={() => {
              deletePost(post._id);
              goTo('Home');
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default PostPreviewScreen;
