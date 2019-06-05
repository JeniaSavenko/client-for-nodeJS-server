import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import PostPreviewScreen from '../screen/PostPreviewScreen';
import AddPostScreen from '../screen/AddPostScreen';

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  PostScreen: { screen: PostPreviewScreen },
  AddPost: { screen: AddPostScreen },

});
export default createAppContainer(Navigator);
