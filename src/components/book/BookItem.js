/**
 * 书本
 */

import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import appStyle from '../../style'

const BookItem = ({ item, index }) => {
  return (
    <View style={ [styles.container, {
      marginTop: index === 0 ? appStyle.variables.mdPad : 0
    }] }>
      <Image style={ styles.bookThumb } source={{ uri: item.thumb }} />
      <Text style={ styles.bookName }>
        { item.name }
      </Text>
      <Text style={ styles.bookDes}>
        <Text style={ styles.monay }>
          { item.descript }
        </Text>
        (<Text style={ [styles.bookStatus, {
          color: item.state === 1 ? appStyle.variables.success : appStyle.variables.danger
        }] }>
          { item.state === 1 ? '待售' : '已售' }
        </Text>)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: appStyle.variables.mdPad,
    margin: appStyle.variables.mdPad,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  bookThumb: {
    width: appStyle.variables.screenWidth / 2,
    height: appStyle.variables.screenWidth / 2
  },
  bookName: {
    fontSize: appStyle.variables.fontSizeBase,
    margin: appStyle.variables.xsPad
  },
  bookDes: {
    flexDirection: 'row',
    fontSize: appStyle.variables.fontSizeSmall,
    color: appStyle.variables.titleColor
  },
  bookStatus: {
    width: 50,
    textAlign: 'center',
    marginLeft: appStyle.variables.xsPad
  }
})

export default BookItem