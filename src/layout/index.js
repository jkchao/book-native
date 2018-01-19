
import React, { Component } from 'react'

import { Animated, View, StatusBar, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Book from '../pages/Book'
import Me from '../pages/Me'

import Ionicons from 'react-native-vector-icons/Ionicons'

// style
import appStyle from '../style'

const BasicApp = TabNavigator(
  {
    BookTab: {
      screen: Book,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Book',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={ focused ? 'ios-bookmarks' : 'ios-bookmarks-outline' }
            size={ 20 }
            style={{ color: tintColor }}
          />
        )
      }
    },
    MeTab: {
      screen: Me,
      path: '/Me',
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={ focused ? 'ios-person' : 'ios-person-outline' }
            size={ 20 }
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: appStyle.variables.tabActiveColor,
      labelStyle: {
        fontSize: 12,
        marginTop: appStyle.variables.xsPad
      },
      style: {
        backgroundColor: appStyle.variables.tabDefaultBg,
        height: appStyle.variables.tabHeight,
        borderWidth: 0
      }
    }
  }
)

export default class Layout extends Component {
//   componentDidMount() {
//     // do anything while splash screen keeps, use await to wait for an async task.
//      SplashScreen.hide()
//  }

  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.statusBar }>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='#FFFFFF'
            currentHeight='50'
          />
        </View>
        <BasicApp />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#FFFFFF',
    height: appStyle.variables.barHeight
  }
})
