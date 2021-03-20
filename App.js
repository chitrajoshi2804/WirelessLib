import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//type 'npm install react-navigation' in the terminal to install and use the library in the code
import {createAppContainer} from 'react-navigation';
//type 'npm install react-navigation-tabs' in the terminal to install and use the library in the code
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BookTransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';


export default class App extends React.Component {
  render()
  {
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : BookTransactionScreen},
  Search : {screen : SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
})
