/** 
 * 
 * book footer
*/

import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

import appStyle from '../../style'

const RefreshType = {
  error: 0,
  loading: 1,
  noMore: 2
}

const BookFooter = (type) => {
  let footer = null
  switch (type) {
    case RefreshType.error:
      footer = (
                  <View style={ styles.container }>
                    <Text>出错了！</Text>
                  </View>
                )
      break
    case RefreshType.loading:
      footer = (
                  <View style={ styles.container }>
                    <ActivityIndicator color={ appStyle.variables.primary }/>
                  </View>
                )
      break
    case RefreshType.noMore:
      footer = (
                <View style={ styles.container }>
                  <Text>
                    <Entypo name="air" size={ 14 } style={ styles.icon }></Entypo>
                  </Text>
                </View>
               )
      break
  }
  return footer
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: appStyle.variables.mdPad
  },
  icon: {
    color: 'rgba(0, 0, 0, .15)'
  }
})

export default BookFooter
