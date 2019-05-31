import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import PostPreviewScreen from '../screen/PostPreviewScreen';
import AddPostScreen from '../screen/AddPostScreen';

export const goTo = (screen, params) => navigation.navigate(screen, params);

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Mega News',
    },
  },
  PostScreen: { screen: PostPreviewScreen },
  AddPost: { screen: AddPostScreen },

});
export default createAppContainer(Navigator);
