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
            size={ 26 }
            style={{ color: tintColor }}
          />
        )
      }
    },
    ABoutTab: {
      screen: ABout,
      path: '/ABout',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={ focused ? 'ios-settings' : 'ios-settings-outline' }
            size={ 26 }
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    configureTransition: (currentTransitionProps,nextTransitionProps) => ({
      timing: Animated.spring,
      tension: 1,
      friction: 35,
    }),
    swipeEnabled: false,
  }
)

export default () => <BasicApp />
