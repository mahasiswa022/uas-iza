import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import About from './screens/About';
import Akun from './screens/Akun';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="arrow-right-bold-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Akun}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuTab"
        component={MenuTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({});
