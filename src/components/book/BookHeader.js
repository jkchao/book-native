/** 
 * 
 * book header
*/

import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import appStyle from '../../style'

const BookHeader = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>一些读过的书，一些想卖的书。</Text>
      <Text style={ [styles.text, {
        marginTop: 6
      }] }>微信: qq_419027396</Text>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: appStyle.variables.mdPad,
    padding: appStyle.variables.mdPad,
    backgroundColor: '#FFFFFF' 
  },
  text: {
    paddingLeft: appStyle.variables.mdPad,
    fontSize: appStyle.variables.fontSizeSmall,
    color: appStyle.variables.normalColor
  }
})

export default BookHeader
