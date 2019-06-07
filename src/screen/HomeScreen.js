import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import ListItem from '../components/ListItem';
import Block from '../components/Block';
import { runSocket } from '../api/socket';
import HeaderButton from '../components/HeaderButton';

const HomeScreen = ({
  posts,
  navigation,
}) => {
  useEffect(() => {
    runSocket();
  }, []);

  const goTo = navigation.navigate;

  const { t } = useTranslation();

  const [isLoading, setLoading] = useState(false);

  const update = () => {
    runSocket();
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
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      </ScrollView>
      <Button title={t('addPost')} onPress={() => goTo('AddPost')} />
    </Block>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: <HeaderButton />,
};

const mapStateToProps = store => ({
  posts: store.post.posts,
});

export default connect(mapStateToProps)(HomeScreen);
