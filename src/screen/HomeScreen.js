import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import ListItem from '../components/ListItem';
import Block from '../components/Block';
import { runSocket } from '../api/socket';

const HomeScreen = ({
  posts,
  navigation,
}) => {
  useEffect(() => {
    runSocket();
  }, []);

  const goTo = (screen, params) => navigation.navigate(screen, params);

  const [isLoading, setLoading] = useState(false);

  const update = () => {
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

export default connect(mapStateToProps)(HomeScreen);
