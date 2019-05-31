import React, { useState } from 'react';
import {
  Button, Tile, Icon, Input,
} from 'react-native-elements';
import { connect } from 'react-redux';
import Block from '../components/Block';
import { addTask, createPostTitle } from '../actions/PostActions';
import { goTo } from '../components/Navigator';


const AddPostScreen = ({ setTitleAction, navigation }) => {
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
            setTitleAction(title, text);
            goTo('Home');
          }}
        />
      </Block>
    </Block>
  );
};

const mapStateToProps = store => ({
  createPost: store.post.posts,
});
const mapDispatchToProps = dispatch => ({
  setTitleAction: (title, text) => dispatch(addTask(title, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);
