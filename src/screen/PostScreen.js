import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import ListItem from '../components/ListItem';
import Block from '../components/Block';
import WebSocket from '../api/socket';
import { Navigation } from '../constants/Navigation';
import { logoutUser } from '../actions/UserActions';

const PostScreen = ({
  posts,
  navigation,
  userName,
}) => {
  useEffect(() => {
    WebSocket.runSocket();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const goTo = navigation.navigate;

  const { t: translate } = useTranslation();

  const update = () => {
    WebSocket.runSocket();
    setLoading(false);
  };

  const startEdit = (item) => {
    WebSocket.editModeStart(userName, item._id);
    goTo(Navigation.PostPreviewScreen, {
      post: item,
    });
  };

  const renderItem = ({ item }) => (
    <ListItem
      editMode={item.editMode}
      userId={item.editing}
      title={item.title}
      text={item.text}
      updatedAt={item.updatedAt}
      onPress={() => startEdit(item)}
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
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      </ScrollView>
      <Button title={translate('chooseRoom')} onPress={() => goTo(Navigation.ChooseRoomScreen)} />
      <Button title={translate('addUser')} onPress={() => goTo(Navigation.AddUserScreen)} />
      <Button title={translate('addPost')} onPress={() => goTo(Navigation.AddPost)} />
    </Block>
  );
};

const mapStateToProps = store => ({
  posts: store.post.posts,
  userName: store.user.name,

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
