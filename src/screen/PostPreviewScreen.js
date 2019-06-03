import React, { useState } from 'react';
import { Button, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import Block from '../components/Block';
import { rmPost, savePost } from '../actions/PostActions';
import { goTo } from '../components/Navigator';

const PostPreviewScreen = ({ navigation, saveTextAction, deletePostAction }) => {
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
              saveTextAction(post._id, title, text);
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
              deletePostAction(post._id);
              goTo('Home');
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  saveTextAction: (itemId, title, text) => dispatch(savePost(itemId, title, text)),
  deletePostAction: item => dispatch(rmPost(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPreviewScreen);
