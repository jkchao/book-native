/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import { TabNavigator } from 'react-navigation'
import Home from '../pages/home'
import ABout from '../pages/about'


const BasicApp = TabNavigator({
  Home: { screen: Home },
  ABout: { screen: ABout }
})

export default () => <BasicApp />
