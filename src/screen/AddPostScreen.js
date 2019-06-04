import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import Block from '../components/Block';
import { createPostTitle } from '../actions/PostActions';
import { socket } from './HomeScreen';

const AddPostScreen = ({ setTitleAction, navigation }) => {
  const goTo = (screen, params) => navigation.navigate(screen, params);

  const [title, setTitle] = useState();

  const [text, setText] = useState();

  const sendSocketIO = (title, text) => {
    socket.emit('example_message', { title, text });
    socket.on('test', msg => console.log(msg));
  };

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
            sendSocketIO(title, text);
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
  setTitleAction: (title, text) => dispatch(createPostTitle(title, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);
