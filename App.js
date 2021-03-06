import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TransactionScreen from './screens/TransactionScreen'
import SearchScreen from './screens/SearchScreen'
import HomeScreen from './screens/HomeScreen'
export default class App extends React.Component  {
   render() {
     return(
        <AppContainer/>
     )
   }
}
const LibraryScreen = createBottomTabNavigator (
  {
    Transaction:{screen:TransactionScreen},
    Search:{screen:SearchScreen},
    Home:{screen:HomeScreen}
    
  }
)
const AppContainer = createAppContainer(LibraryScreen)