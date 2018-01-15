/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
    HomeTab: {
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
        height: appStyle.variables.tabHeight
      }
    }
  }
)

export default class Layout extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          style={ styles.statusBar }
        />
        <BasicApp />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: appStyle.variables.navbarHeight
  }
})
