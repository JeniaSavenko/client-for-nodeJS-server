import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import openSocket from 'socket.io-client';
import ListItem from '../components/ListItem';
import Block from '../components/Block';
import { getPosts } from '../actions/PostActions';

export const socket = openSocket('http://localhost:3000');

const HomeScreen = ({
  posts,
  getPostsAction,
  navigation,
}) => {
  useEffect(() => {
    getPostsAction();
  }, []);

  const goTo = (screen, params) => navigation.navigate(screen, params);

  const [isLoading, setLoading] = useState(false);

  const update = async () => {
    setLoading(false);
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      text={item.text}
      onPress={() => {
        goTo('PostScreen', {
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
      <Button title="Add Posts" onPress={() => goTo('AddPost')} />
    </Block>
  );
};

const mapStateToProps = store => ({
  posts: store.post.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostsAction: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
