
import React, { Component } from 'react'

import { Animated, View, StatusBar, StyleSheet, Platform } from 'react-native'
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
      inactiveTintColor: appStyle.variables.subColor,
      labelStyle: {
        fontSize: 12,
        marginTop: Platform === 'ios' ? appStyle.variables.xsPad : 6
      },
      style: {
        backgroundColor: appStyle.variables.tabDefaultBg,
        height: appStyle.variables.tabHeight,
        borderWidth: 0
      }
    },
    tabBarPosition: 'bottom'
  }
)

export default class Layout extends Component {

  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.statusBar }>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='#FFFFFF'
            currentHeight={appStyle.variables.barHeight}
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
