import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About</Text>
    </View>
  );
}

function PostsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>
      <Text>Posts</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default class ProfileDesc extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Posts"
                    tabBarOptions={{
                      activeTintColor: '#e91e63',
                      labelStyle: { fontSize: 16 },
                      style: { backgroundColor: 'powderblue' },
                    }}>
                    <Tab.Screen name="About" component={AboutScreen} />
                    <Tab.Screen name="Posts" component={PostsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        ); 
  }
    
}