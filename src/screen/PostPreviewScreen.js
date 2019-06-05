/* eslint no-underscore-dangle: 0 */
import React, { useState } from 'react';
import { Button, Icon, Input } from 'react-native-elements';
import Block from '../components/Block';
import { deletePost, updatePost } from '../api/socket';

const PostPreviewScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  const goTo = (screen, params) => navigation.navigate(screen, params);

  const [title, setTitle] = useState(post.title);

  const [text, setText] = useState(post.text);

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
      <Block row ac jb widht pv="10" ph="5">
        <Block width="48%">
          <Button
            outline
            icon={(
              <Icon
                name="ios-save"
                type="ionicon"
                color="#fff"
              />
)}
            titleStyle={{
              paddingLeft: 5,
              fontSize: 16,
            }}
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
                name="ios-trash"
                type="ionicon"
                color="#fff"
              />
)}
            titleStyle={{
              paddingLeft: 5,
              fontSize: 16,
            }}
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
