import { createStackNavigator, createAppContainer } from 'react-navigation';
import PostScreen from '../screen/PostScreen';
import PostPreviewScreen from '../screen/PostPreviewScreen';
import AddPostScreen from '../screen/AddPostScreen';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import CreateUserScreen from '../screen/CreateUserScreen';
import ChooseRoomScreen from '../screen/ChooseRoomScreen';
import AddUserScreen from '../screen/AddUserScreen';

const Navigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  ChooseRoomScreen: { screen: ChooseRoomScreen },
  AddUserScreen: { screen: AddUserScreen },
  LoginScreen: { screen: LoginScreen },
  CreateUserScreen: { screen: CreateUserScreen },
  PostScreen: { screen: PostScreen },
  PostPreviewScreen: { screen: PostPreviewScreen },
  AddPost: { screen: AddPostScreen },

});
export default createAppContainer(Navigator);
