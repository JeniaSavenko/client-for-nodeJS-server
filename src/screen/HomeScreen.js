import React, { useState, useEffect } from 'react';
import {
  ScrollView, FlatList, RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import ListItem  from '../components/ListItem';
import Block from '../components/Block';
import {
  getPosts, rmPost, savePost, textEdit
} from '../actions/PostActions';


const HomeScreen = ({
  posts,
  getPostsAction,
  navigation,
}) => {
  useEffect(() => {
    getPostsAction();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const update = async () => {
    setLoading(false);

    posts = getPostsAction();
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      text={item.text}
      onPress={() => {
        navigation.navigate('PostScreen', {
          post: item,
        });
      }}
    />
  );

  return (
    <Block height width>
      <ScrollView
        refreshControl={(
          <RefreshControl
            refreshing={isLoading}
            onRefresh={update}
          />
                )}
      >
        <FlatList
          data={posts}
          renderItem={renderItem}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
        />
      </ScrollView>
      <Button title="Add Posts" onPress={() => navigation.navigate('AddPost')} />
    </Block>
  );
};


const mapStateToProps = store => ({
  posts: store.post.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostsAction: () => dispatch(getPosts()),
  deletePostAction: item => dispatch(rmPost(item)),
  textEditAction: (itemId, itemValue) => dispatch(textEdit(itemId, itemValue)),
  saveTextAction: (itemId, text, title) => dispatch(savePost(itemId, text, title))

});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
