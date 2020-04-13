import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import MainCard from './components/shared-components/CardView/MainCard';
import Profile from './components/profile-activity/Profile';
import Notification from './components/notification-activity/Notification';
import Post from './components/post-activity/Post';
import Message from './components/message-activity/Message';

import fireStoreAuth from './util/Auth'

class HomeScreen extends React.Component {
  render() {
    return (
       <MainCard style={styles.container}/>
    )
  }

  componentDidMount() {
    fireStoreAuth();
  }
}
class NotificationScreen extends React.Component {
  render() {
    return (
       <Notification />
    )
  }
}

class PostScreen extends React.Component {
  render() {
    return (
       <Post />
    )
  }
}

class MessageScreen extends React.Component {
  render() {
    return (
       <Message />
    )
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
       <Profile />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-heart'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#fffaeb',
        barStyle: { backgroundColor: '#ffbf11' },
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-add-circle'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-chatbubbles'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-contact'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);
