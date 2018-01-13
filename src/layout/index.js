/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import { Animated } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Home from '../pages/home'
import ABout from '../pages/about'

import Ionicons from 'react-native-vector-icons/Ionicons';

// style
import appStyle from '../style'

const BasicApp = TabNavigator(
  {
    HomeTab: {
      screen: Home,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={ focused ? 'ios-home' : 'ios-home-outline' }
            size={ 22 }
            style={{ color: tintColor }}
          />
        )
      }
    },
    ABoutTab: {
      screen: ABout,
      path: '/ABout',
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={ focused ? 'ios-person' : 'ios-person-outline' }
            size={ 22 }
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: appStyle.colors.activeColor,
      labelStyle: {
        fontSize: 12,
        marginTop: 10
      },
      style: {
        backgroundColor: appStyle.colors.tabBackground,
        height: 44
      }
    }
  }
)

export default () => <BasicApp />
